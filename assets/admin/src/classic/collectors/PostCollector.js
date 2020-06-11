/**
 * External dependencies
 */
import $ from 'jquery'
import { debounce, isUndefined } from 'lodash'

/**
 * WordPress dependencies
 */
import { addAction } from '@wordpress/hooks'

/**
 * Internal dependencies
 */
import DataCollector from './DataCollector'

class PostCollector extends DataCollector {
	setup() {
		this.elemSlug = $( '#post_name' )
		this.elemTitle = $( '#title' )
		this.elemDescription = $( '#excerpt' )
		this.elemContent = $( '#content' )

		this.assessThumbnail = this.assessThumbnail.bind( this )
		addAction(
			'rank_math_updated_featured_image',
			'rank-math',
			this.assessThumbnail
		)
		this.events()
	}

	/**
	 * Get post content.
	 *
	 * @return {string} The post's content.
	 */
	getContent() {
		if ( null === this.elemContent || 0 === this.elemContent.length ) {
			return
		}

		return this.isTinymce() &&
			tinymce.activeEditor &&
			'content' === tinymce.activeEditor.id
			? tinymce.activeEditor.getContent()
			: this.elemContent.val()
	}

	events() {
		if (
			'' === this.elemSlug.val() &&
			$( '#editable-post-name-full' ).length
		) {
			this.elemSlug
				.val( $( '#editable-post-name-full' ).text() )
				.trigger( 'input' )
		}

		this.elemContent.on(
			'input change',
			debounce( () => {
				this.handleContentChange()
			}, 500 )
		)

		$( window ).on( 'load', () => {
			if ( ! this.isTinymce() ) {
				return
			}

			if (
				tinymce.activeEditor &&
				! isUndefined( tinymce.editors.content )
			) {
				tinymce.editors.content.on(
					'keyup change',
					debounce( () => {
						this.handleContentChange()
					}, 500 )
				)
			}

			if ( tinymce.editors && ! isUndefined( tinymce.editors.excerpt ) ) {
				tinymce.editors.excerpt.on(
					'keyup change',
					debounce( () => {
						tinymce.editors.excerpt.save()
						this.handleExcerptChange()
					}, 500 )
				)
			}
		} )

		// Update Permalink.
		$( document ).on( 'ajaxComplete', ( event, response, ajaxOptions ) => {
			const ajaxEndPoint = '/admin-ajax.php'
			if (
				ajaxEndPoint !==
				ajaxOptions.url.substr( 0 - ajaxEndPoint.length )
			) {
				return
			}

			let slug = ''
			if (
				'string' === typeof ajaxOptions.data &&
				-1 !== ajaxOptions.data.indexOf( 'action=sample-permalink' )
			) {
				if ( '' === response.responseText ) {
					slug = this.elemTitle.val()
				} else {
					// Added divs to the response text, otherwise jQuery won't parse to HTML, but an array.
					slug = $( '<div>' + response.responseText + '</div>' )
						.find( '#editable-post-name-full' )
						.text()
				}

				rankMathEditor.updatePermalink( slug )
			}
		} )
	}

	assessThumbnail( featuredImage ) {
		this.featuredImage = {
			source_url: featuredImage.src,
			alt_text: featuredImage.alt,
		}

		this.handleFeaturedImageChange( featuredImage )
	}
}

export default PostCollector
