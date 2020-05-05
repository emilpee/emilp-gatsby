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
    actions.createNode([node])
  })
}
