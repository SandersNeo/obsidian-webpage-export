import { Setting } from "obsidian";
import { ExportPreset, Settings } from "./settings/settings";

/**
 * General options for the MarkdownRendererAPI
 */
export class MarkdownRendererAPIOptions
{
	/**
	 * The container to render the HTML into.
	 */
	container?: HTMLElement = undefined;

	/**
	 * Keep the .markdown-preview-view or .view-content container elements.
	 */
	keepViewContainer?: boolean = true;

	/**
	 * Convert the headers into a tree structure with all children of a header being in their own container.
	 */
	makeHeadersTrees?: boolean = true;

	/**
	 * Run post processing on the html to clean up various obsidian specific elements.
	 */
	postProcess?: boolean = true;

	/**
	 * Display a window with a log and progress bar.
	 */
	displayProgress?: boolean = true;
}

/**
 * Options for the MarkdownWebpageRendererAPI when export a webpage object.
 */
export class MarkdownWebpageRendererAPIOptions extends MarkdownRendererAPIOptions
{
	/**
	 * Add sidebars to either side of the page.
	 */
	addSidebars?: boolean = Settings.exportPreset != ExportPreset.RawDocuments;

	/**
	 * Add a theme toggle to the left sidebar.
	 */
	addThemeToggle?: boolean = Settings.includeThemeToggle;

	/**
	 * Add a file navigation tree to the left sidebar.
	 */
	addFileNavigation?: boolean = Settings.includeFileTree;

	/**
	 * Add a document outline to the right sidebar
	 */
	addOutline?: boolean = Settings.includeOutline;

	/**
	 * Add a search bar to the left sidebar.
	 */
	addSearch?: boolean = Settings.includeSearchBar;

	/**
	 * Add the global graph view to the right sidebar.
	 */
	addGraphView?: boolean = Settings.includeGraphView;

	/**
	 * Transfer body classes from obsidian to the exported document.
	 */
	addBodyClasses?: boolean = true;

	/**
	 * Add mathjax styles to the document
	 */
	addMathjaxStyles?: boolean = true;

	/**
	 * Add a <head> tag with metadata, scripts, and styles.
	 */
	addHeadTag?: boolean = true;

	/**
	 * Add a title to the top of each page. (Makes sure there are no duplicate titles)
	 */
	addTitle?: boolean = true;

	
	/**
	 * Allows lists with sub-items to be folded / collpased.
	 */
	allowFoldingLists?: boolean = Settings.allowFoldingLists;

	/**
	 * Allows headings to be folded / collapsed.
	 */
	allowFoldingHeadings?: boolean = Settings.allowFoldingHeadings;

	/**
	 * Allows the sidebars to be resized.
	 */
	allowResizeSidebars?: boolean = Settings.allowResizingSidebars;

	/**
	 * The current file wil be opened in the file anvigation by default.
	 * This only works in HTML is inlined!
	 */
	openNavFileLocation?: boolean = true;

	/**
	 * All items in the document outline will be collpased by default.
	 */
	startOutlineCollapsed?: boolean = Settings.startOutlineCollapsed;

	/**
	 * Any outline item with a nesting level >= to this will be collapsible.
	 */
	minOutlineCollapsibleLevel?: number = Settings.minOutlineCollapse;

	/**
	 * The name of the vault displayed above the file navigation.
	 */
	vaultName?: string = app.vault.getName();
	
	/**
	 * Include javascript in the export (both inline or external)
	 */
	includeJS?: boolean = true;

	/**
	 * Include CSS in the export (both inline or external)
	 */
	includeCSS?: boolean = true;

	/**
	 * Inline / embed media items (images, video, audio) directly into the HTML.
	 */
	inlineMedia?: boolean = Settings.inlineAssets;

	/**
	 * Inline / embed the css styles directly into the HTML.
	 */
	inlineCSS?: boolean = Settings.inlineAssets;

	/**
	 * Inline / embed the javascript directly into the HTML.
	 */
	inlineJS?: boolean = Settings.inlineAssets;

	/**
	 * Inline / embed other HTML directly into the HTML.
	 */
	inlineHTML?: boolean = Settings.inlineAssets;

	/**
	 * Inline / embed fonts directly into the HTML.
	 */
	inlineFonts?: boolean = Settings.inlineAssets;

	/**
	 * Do not leave any online urls, download them and embed them into the HTML.
	 */
	offlineResources?: boolean = Settings.makeOfflineCompatible;

	/**
	 * Make all paths and file names web style (lowercase, no spaces).
	 * For example: "My File.md" -> "my-file.html"
	 */
	webStylePaths?: boolean = Settings.makeNamesWebStyle;

	/**
	 * Flatten all export paths so that all HTML files are exported to the same root directory without the normal folder structure.
	 */
	flattenExportPaths?: boolean = false;

	/**
	 * Fix all links to be relative and direct to other files or media included in the export.
	 */
	fixLinks?: boolean = true;
}
