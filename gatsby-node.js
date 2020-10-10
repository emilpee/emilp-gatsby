exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const icons = [
    { type: 'fab', name: 'linkedin', url: 'https://www.linkedin.com/in/emil-petersson-5a042b114/' },
    { type: 'fab', name: 'facebook', url: 'https://www.facebook.com/emilpee' },
    { type: 'fab', name: 'github', url: 'https://github.com/emilpee/' },
  ]

  const links = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
  ]

  icons.forEach(icon => {
    const node = {
      id: createNodeId(`FontAwesome-${icon.name}`),
      type: icon.type,
      name: icon.name,
      url: icon.url,
      internal: {
        type: 'fontAwesomeIcon',
        contentDigest: createContentDigest(icon),
      },
    }
    actions.createNode(node)
  })

  links.forEach((link, index) => {
    const node = {
      id: createNodeId(index),
      name: link.name,
      url: link.link,
      internal: {
        type: 'internalLink',
        contentDigest: createContentDigest(link),
      },
    }
    actions.createNode(node)
  })
}
