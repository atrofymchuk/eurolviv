<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <title>xml sitemap</title>
        <style>
          body{margin:0;padding:10px 16px;background:#1e1e1e;color:#d4d4d4;font:13px/1.45 Menlo,Monaco,Consolas,"Courier New",monospace}
          .note{margin:0 0 10px;color:#d4d4d4}
          .line{white-space:nowrap}
          .i1{padding-left:18px}.i2{padding-left:36px}
          .tag{color:#569cd6}.attr{color:#9cdcfe}.str{color:#ce9178}.text{color:#b5cea8}
        </style>
      </head>
      <body>
        <div class="note">This XML file does not appear to have any style information associated with it. The document tree is shown below.</div>
        <div class="line">
          <span class="tag">&lt;urlset</span>
          <span class="attr"> xmlns=</span><span class="str">"http://www.sitemaps.org/schemas/sitemap/0.9"</span>
          <span class="attr"> xmlns:xhtml=</span><span class="str">"http://www.w3.org/1999/xhtml"</span>
          <span class="tag">&gt;</span>
        </div>
        <xsl:for-each select="sitemap:urlset/sitemap:url">
          <div class="line i1"><span class="tag">&lt;url&gt;</span></div>
          <div class="line i2"><span class="tag">&lt;loc&gt;</span><span class="text"><xsl:value-of select="sitemap:loc"/></span><span class="tag">&lt;/loc&gt;</span></div>
          <xsl:for-each select="xhtml:link">
            <div class="line i2">
              <span class="tag">&lt;xhtml:link</span>
              <span class="attr"> rel=</span><span class="str">"<xsl:value-of select="@rel"/>"</span>
              <span class="attr"> hreflang=</span><span class="str">"<xsl:value-of select="@hreflang"/>"</span>
              <span class="attr"> href=</span><span class="str">"<xsl:value-of select="@href"/>"</span>
              <span class="tag">/&gt;</span>
            </div>
          </xsl:for-each>
          <div class="line i1"><span class="tag">&lt;/url&gt;</span></div>
        </xsl:for-each>
        <div class="line"><span class="tag">&lt;/urlset&gt;</span></div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
