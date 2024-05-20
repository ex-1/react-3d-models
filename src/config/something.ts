/* eslint-disable no-mixed-spaces-and-tabs */
export type ArticleExtraHotkey = {
	keys: string[]
	action: string
}

export type ArticleExtra =
	| {
			type: 'hotkeys'
			keysTable: ArticleExtraHotkey[]
	  }
	| {
			type: 'image'
			name: string
			url: string
	  }
