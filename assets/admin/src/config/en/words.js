const auxiliaries = [ 'being', 'getting', 'having', 'what\'s' ]

const possessivePronouns  = [ 'one\'s', 'nobody\'s', 'everyone\'s', 'everybody\'s', 'someone\'s', 'somebody\'s', 'anyone\'s', 'anybody\'s', 'nothing\'s', 'everything\'s', 'something\'s', 'anything\'s', 'whoever\'s', 'others\'', 'other\'s', 'another\'s', 'neither\'s', 'either\'s' ]

const transitionWords = [ 'again', 'definitely', 'eternally', 'expressively', 'instead', 'expressly', 'immediately', 'including', 'instantly', 'namely', 'naturally', 'next', 'notably', 'now', 'nowadays', 'ordinarily', 'positively', 'truly', 'ultimately', 'uniquely', 'usually', 'almost', 'maybe', 'probably', 'granted', 'initially', 'too', 'actually', 'already', 'e.g', 'i.e', 'often', 'regularly', 'simply', 'optionally', 'perhaps', 'sometimes', 'likely', 'never', 'ever', 'else', 'inasmuch', 'provided', 'currently', 'incidentally', 'elsewhere', 'particular', 'recently', 'relatively', 'f.i', 'clearly', 'apparently' ]

const titles = [ 'ms', 'mss', 'mrs', 'mr', 'dr', 'prof', 'jr', 'sr' ]

const atEnding = [ 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth', 'doing', 'daring', 'having', 'appearing', 'becoming', 'coming', 'keeping', 'remaining', 'staying', 'saying', 'asking', 'stating', 'seeming', 'letting', 'making', 'setting', 'showing', 'putting', 'adding', 'going', 'using', 'trying', 'containing', 'new', 'newer', 'newest', 'old', 'older', 'oldest', 'previous', 'good', 'well', 'better', 'best', 'big', 'bigger', 'biggest', 'easy', 'easier', 'easiest', 'fast', 'faster', 'fastest', 'far', 'hard', 'harder', 'hardest', 'least', 'own', 'large', 'larger', 'largest', 'long', 'longer', 'longest', 'low', 'lower', 'lowest', 'high', 'higher', 'highest', 'regular', 'simple', 'simpler', 'simplest', 'small', 'smaller', 'smallest', 'tiny', 'tinier', 'tiniest', 'short', 'shorter', 'shortest', 'main', 'actual', 'nice', 'nicer', 'nicest', 'real', 'same', 'able', 'certain', 'usual', 'so-called', 'mainly', 'mostly', 'recent', 'anymore', 'complete', 'lately', 'possible', 'commonly', 'constantly', 'continually', 'directly', 'easily', 'nearly', 'slightly', 'somewhere', 'estimated', 'latest', 'different', 'similar', 'widely', 'bad', 'worse', 'worst', 'great', 'specific',  'available', 'average', 'awful', 'awesome', 'basic', 'beautiful', 'busy', 'current', 'entire', 'everywhere', 'important', 'major', 'multiple', 'normal', 'necessary', 'obvious', 'partly', 'special', 'last', 'early', 'earlier', 'earliest', 'young', 'younger', 'youngest' ]

const atBeginningAndEnding = [ 'a', 'an', 'the', 'in', 'from', 'with', 'under', 'throughout', 'atop', 'for', 'on', 'of', 'to', 'aboard', 'about', 'above', 'abreast', 'absent', 'across', 'adjacent', 'after', 'against', 'along', 'alongside', 'amid', 'mid', 'among', 'apropos', 'apud', 'around', 'as', 'astride', 'at', 'ontop', 'afore', 'tofore', 'behind', 'ahind', 'below', 'ablow', 'beneath', 'neath', 'beside', 'between', 'atween', 'beyond', 'ayond', 'by', 'chez', 'circa', 'spite', 'down', 'except', 'into', 'less', 'like', 'minus', 'near', 'nearer', 'nearest', 'anear', 'notwithstanding', 'off', 'onto', 'opposite', 'out', 'outen', 'over', 'past', 'per', 'pre', 'qua', 'sans', 'sauf', 'sithence', 'through', 'thru', 'truout', 'toward', 'underneath', 'up', 'upon', 'upside', 'versus', 'via', 'vis-à-vis', 'without', 'ago', 'apart', 'aside', 'aslant', 'away', 'withal', 'towards', 'amidst', 'amongst', 'midst', 'whilst', 'and', 'or', 'and/or', 'yet', 'this', 'that', 'these', 'those', 'highly', 'very', 'really', 'extremely', 'absolutely', 'completely', 'totally', 'utterly', 'quite', 'somewhat', 'seriously', 'fairly', 'fully', 'amazingly', 'all', 'some', 'many', 'lot', 'lots', 'ton', 'tons', 'bit', 'no', 'every', 'enough', 'little', 'much', 'more', 'most', 'plenty', 'several', 'few', 'fewer', 'kind', 'kinds', 'my', 'your', 'his', 'her', 'its', 'their', 'our', 'mine', 'yours', 'hers', 'theirs', 'ours' ]

const everywhere = [ 'accordingly', 'additionally', 'afterward', 'afterwards', 'albeit', 'also', 'although', 'altogether', 'another', 'basically', 'because', 'before', 'besides', 'but', 'certainly', 'chiefly', 'comparatively', 'concurrently', 'consequently', 'contrarily', 'conversely', 'correspondingly', 'despite', 'doubtedly', 'during', 'e.g.', 'earlier', 'emphatically', 'equally', 'especially', 'eventually', 'evidently', 'explicitly', 'finally', 'firstly', 'following', 'formerly', 'forthwith', 'fourthly', 'further', 'furthermore', 'generally', 'hence', 'henceforth', 'however', 'i.e.', 'identically', 'indeed', 'instead', 'last', 'lastly', 'later', 'lest', 'likewise', 'markedly', 'meanwhile', 'moreover', 'nevertheless', 'nonetheless', 'nor',  'notwithstanding', 'obviously', 'occasionally', 'otherwise', 'overall', 'particularly', 'presently', 'previously', 'rather', 'regardless', 'secondly', 'shortly', 'significantly', 'similarly', 'simultaneously', 'since', 'so', 'soon', 'specifically', 'still', 'straightaway', 'subsequently', 'surely', 'surprisingly', 'than', 'then', 'thereafter', 'therefore', 'thereupon', 'thirdly', 'though', 'thus', 'till', 'undeniably', 'undoubtedly', 'unless', 'unlike', 'unquestionably', 'until', 'when', 'whenever', 'whereas', 'while', 'always', 'once', 'twice', 'thrice', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'us', 'them', 'myself', 'yourself', 'himself', 'herself', 'itself', 'oneself', 'ourselves', 'yourselves', 'themselves', 'oh', 'wow', 'tut-tut', 'tsk-tsk', 'ugh', 'whew', 'phew', 'yeah', 'yea', 'shh', 'oops', 'ouch', 'aha', 'yikes', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'hundred', 'hundreds', 'thousand', 'thousands', 'million', 'millions', 'billion', 'billions', 'am', 'are', 'aren\'t', 'be', 'been', 'get', 'gets', 'got', 'gotten', 'he\'s', 'i\'m', 'is', 'isn\'t', 'it\'s', 'she\'s', 'that\'s', 'they\'re', 'was', 'wasn\'t', 'were', 'we\'re', 'weren\'t', 'you\'re', 'can', 'cannot', 'can\'t', 'could', 'couldn\'t', 'could\'ve', 'dare', 'dares', 'dared', 'do', 'don\'t', 'does', 'doesn\'t', 'did', 'didn\'t', 'done', 'have', 'haven\'t', 'had', 'hadn\'t', 'has', 'hasn\'t', 'i\'ve', 'you\'ve', 'we\'ve', 'they\'ve', 'i\'d', 'you\'d', 'he\'d', 'she\'d', 'it\'d', 'we\'d', 'they\'d', 'would', 'wouldn\'t', 'would\'ve', 'may', 'might', 'must', 'need', 'needn\'t', 'needs', 'ought', 'shall', 'shalln\'t', 'shan\'t', 'should', 'shouldn\'t', 'will', 'won\'t', 'i\'ll', 'you\'ll', 'he\'ll', 'she\'ll', 'it\'ll', 'we\'ll', 'they\'ll', 'there\'s', 'there\'re', 'there\'ll', 'here\'s', 'here\'re', 'there\'ll', 'appear', 'appears', 'appeared', 'become', 'becomes', 'became', 'come', 'comes', 'came', 'keep', 'keeps', 'kept', 'remain', 'remains', 'remained', 'stay', 'stays', 'stayed', 'turn', 'turns', 'turned', 'say', 'says', 'said', 'claimed', 'ask', 'asks', 'asked', 'stated', 'explain', 'explains', 'explained', 'think', 'thinks', 'talks', 'talked', 'announces', 'announced', 'tells', 'told', 'discusses', 'discussed', 'suggests', 'suggested', 'understands', 'understood', 'seem', 'seems', 'seemed', 'let', 'let\'s', 'lets', 'make', 'makes', 'made', 'want', 'showed', 'shown', 'go', 'goes', 'went', 'gone', 'take', 'takes', 'took', 'taken',	'put', 'puts', 'use', 'used', 'try', 'tries', 'tried', 'mean', 'means', 'meant', 'called', 'based', 'add', 'adds', 'added', 'contain', 'contains', 'contained', 'consist', 'consists', 'consisted', 'ensure', 'ensures', 'ensured', 'none', 'nobody', 'everyone', 'everybody', 'someone', 'somebody', 'anyone', 'anybody', 'nothing', 'everything', 'something', 'anything', 'each', 'other', 'whatever', 'whichever', 'whoever', 'whomever', 'whomsoever', 'whosoever', 'others', 'neither', 'both', 'either', 'any', 'such', 'sooner', 'just', 'only', 'if', 'even', 'which', 'what', 'whose', 'who', 'whom', 'where', 'how', 'why', 'whether', 'wherever', 'whyever', 'wheresoever', 'whensoever', 'howsoever', 'whysoever', 'whatsoever', 'whereso', 'whomso', 'whenso', 'howso', 'whyso', 'whoso', 'whatso', 'there', 'here', 'whither', 'thither', 'hither', 'whence', 'thence', 'not', 'yes', 'sure', 'top', 'bottom', 'ok', 'okay', 'amen', 'aka', 'etc', 'etcetera', 'sorry', 'please', 'back', 'within', 'forward', 'backward', 'ahead', 'therefor', 'therein', 'hereby', 'hereto', 'wherein', 'therewith', 'herewith', 'wherewith', 'thereby', 'tbs', 'tbsp', 'spk', 'lb', 'qt', 'pk', 'bu', 'oz', 'pt', 'mod', 'doz', 'hr', 'f.g', 'ml', 'dl', 'cl', 'l', 'mg', 'g', 'kg', 'quart', 'thing', 'things', 'way', 'ways', 'matter', 'case', 'likelihood', 'ones', 'piece', 'pieces', 'stuff', 'times', 'part', 'parts', 'percent', 'instance', 'instances', 'aspect', 'aspects', 'item', 'items', 'idea', 'theme', 'person', 'instance', 'instances', 'detail', 'details', 'factor', 'factors', 'difference', 'differences', 'seconds', 'minute', 'minutes', 'hour', 'hours', 'day', 'days', 'week', 'weeks', 'month', 'months', 'year', 'years', 'today', 'tomorrow', 'yesterday' ]

/**
 * Returns function words for english.
 *
 * @return {Object} English function words.
 */
export default function() {
	return {
		excludeAtEnding: atEnding,
		excludeAtBeginningAndEnding: atBeginningAndEnding,
		excludeEverywhere: everywhere,
		all: [].concat(
			possessivePronouns,
			auxiliaries,
			transitionWords,
			titles,
			atEnding,
			atBeginningAndEnding,
			everywhere
		)
	}
}
