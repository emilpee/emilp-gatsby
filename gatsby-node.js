const contentfulConfig = require('./contentful-config')
const contentful = require('contentful')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const icons = [
    { type: 'fab', name: 'linkedin', url: 'https://www.linkedin.com/in/emil-petersson-5a042b114/' },
    { type: 'fab', name: 'facebook', url: 'https://www.facebook.com/emilpee' },
    { type: 'fab', name: 'github', url: 'https://github.com/emilpee/' },
  ]

  icons.forEach(icon => {
    const node = {
      type: icon.type,
      name: icon.name,
      id: createNodeId(`FontAwesome-${icon.name}`),
      url: icon.url,
      internal: {
        type: 'fontAwesomeIcon',
        contentDigest: createContentDigest(icon),
      },
    }
    actions.createNode(node)
  })

  // Get data from contentful delivery API
  const client = contentful.createClient({
    space: contentfulConfig.SPACE_ID,
    environment: 'master',
    accessToken: contentfulConfig.ACCESS_TOKEN,
  })

  client.getEntries({ content_type: 'news' }).then(response => {
    const paragraphs = response.items

    paragraphs.forEach(paragraph => {
      const node = {
        id: paragraph.sys.id,
        internal: {
          type: 'contentfulPost',
          contentDigest: createContentDigest(paragraph),
        },
      }
      actions.createNode(node)
    })
  })
}
