export interface metaData {
    status?: number | null,
    no_of_tags?: number | null,
    url?: string | null,
    url_host?: string | null,
    title?: string | null,
    description?: string | null,
    twitter_card?: string | null,
    twitter_site?: string | null,
    twitter_title?: string | null,
    twitter_description?: string | null,
    twitter_image?: string | null,
    graph_title?: string | null,
    graph_type?: string | null,
    graph_url?: string | null,
    graph_image?: string | null,
    graph_description?: string | null
}

export type logChecker = {
    isURL: boolean;
    isAccessible: boolean;
    isTags: boolean;
    isTwitter: boolean;
    isCardGenerated: boolean;
  }

  