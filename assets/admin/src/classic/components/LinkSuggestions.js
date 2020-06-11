/**
 * External dependencies
 */
import $ from 'jquery'

class LinkSuggestions {
	/**
	 * Class constructor
	 */
	constructor() {
		if (
			'post' !== rankMath.objectType ||
			! rankMath.postSettings.linkSuggestions
		) {
			return
		}

		$.fn.extend( {
			insertLink( url, defaulttext ) {
				const self = this[ 0 ]
				let link = ''

				if ( self.selectionStart || '0' === self.selectionStart ) {
					const startPos = self.selectionStart
					const endPos = self.selectionEnd
					const scrollTop = self.scrollTop

					link =
						'<a href="' +
						url +
						'">' +
						self.value.substring( startPos, endPos ) +
						'</a>'
					if ( startPos === endPos ) {
						link = '<a href="' + url + '">' + defaulttext + '</a>'
					}

					self.value =
						self.value.substring( 0, startPos ) +
						link +
						self.value.substring( endPos, self.value.length )
					self.focus()
					self.selectionStart = startPos + link.length
					self.selectionEnd = startPos + link.length
					self.scrollTop = scrollTop
				} else {
					link = '<a href="' + url + '">' + defaulttext + '</a>'
					self.value += link
					self.focus()
				}
			},
		} )

		// FK as Title & Cycle through FKs
		const cycleFocusKeyword = function( elemTitle, elemInsert ) {
			let current = elemTitle.data( 'fkcount' ) || 0
			const fks = elemTitle.data( 'fk' )

			current += 1
			if ( current === fks.length ) {
				current = 0
			}

			elemTitle.find( '>a' ).text( fks[ current ] )
			elemTitle.data( 'fkcount', current )
			elemInsert.data( 'text', fks[ current ] )
		}

		// Copy Link
		if ( 'function' === typeof ClipboardJS ) {
			const clipboard = new ClipboardJS( '.suggestion-copy' )
			clipboard.on( 'success', function( event ) {
				const target = $( event.trigger )
					.parent()
					.next( '.suggestion-title' )
				const text = target.html()

				target.text( 'Link Copied' )
				setTimeout( function() {
					target.html( text )
				}, 1500 )
			} )
		}

		// No tinymce
		if ( 'object' !== typeof tinymce ) {
			return true
		}

		let editor = null
		let edBody = null

		const isTinymceActive = function() {
			return (
				null !== tinymce.activeEditor &&
				true !== tinymce.activeEditor.isHidden()
			)
		}

		const getSelectedLink = function() {
			let href = ''
			let html = ''
			const node = editor.selection.getStart()
			let link = editor.dom.getParent( node, 'a[href]' )

			if ( ! link ) {
				html = editor.selection.getContent( { format: 'raw' } )

				if ( html && -1 !== html.indexOf( '</a>' ) ) {
					href = html.match( /href="([^">]+)"/ )

					if ( href && href[ 1 ] ) {
						link = editor.$(
							'a[href="' + href[ 1 ] + '"]',
							node
						)[ 0 ]
					}

					if ( link ) {
						editor.selection.select( link )
					}
				}
			}

			return link
		}

		$( '.suggestion-insert' ).on( 'click', function( event ) {
			event.preventDefault()

			const $this = $( this )
			if ( $this.hasClass( 'clicked' ) ) {
				return true
			}

			if ( isTinymceActive() ) {
				editor = tinymce.activeEditor
				edBody = $( editor.getBody() )
				const selected = editor.selection.getContent() || ''

				if ( edBody.find( 'a[data-mce-selected]' ).length ) {
					const linkNode = getSelectedLink()
					editor.dom.setAttribs( linkNode, {
						href: $this.data( 'url' ),
					} )
					if ( $( linkNode ).text() !== selected ) {
						editor.insertContent( selected )
					}
				} else if ( selected.length ) {
					editor.insertContent(
						'<a href="' +
							$this.data( 'url' ) +
							'">' +
							selected +
							'</a>'
					)
				} else {
					editor.insertContent(
						'<a href="' +
							$this.data( 'url' ) +
							'">' +
							$this.data( 'text' ) +
							'</a>'
					)
				}
			} else {
				const textarea = $( 'textarea.wp-editor-area:visible' )
				if ( textarea.length ) {
					textarea
						.first()
						.insertLink( $this.data( 'url' ), $this.data( 'text' ) )
				}
			}

			// Feedback msg
			const target = $this
				.closest( '.suggestion-item' )
				.find( '.suggestion-title' )
			const text = target.html()

			target.text( 'Link Inserted' )
			$this.addClass( 'clicked' )
			setTimeout( function() {
				target.html( text )
				$this.removeClass( 'clicked' )
				if ( true === rankMath.postSettings.useFocusKeyword ) {
					cycleFocusKeyword( target, $this )
				}
			}, 1500 )
		} )

		// Add Tooltip.
		$( '#rank_math_metabox_link_suggestions' )
			.find( 'h2' )
			.append( $( '#rank-math-link-suggestions-tooltip' ).html() )
	}
}

export default LinkSuggestions
