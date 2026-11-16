// EDIT THIS FILE to show/hide sections and add new cards.
// Set enabled:false to hide a module or card; change to true when ready.
// Media: image can be an asset path or empty; shape: landscape, square, portrait.
window.SITE_CONTENT = {
  modules: {conferences:true, talks:true, blogArticles:true, calculators:false},
  conferences: [
    {enabled:true, title:"Conference title", meta:"Year · Location", description:"Conference details to be added.", image:"", shape:"landscape", url:""},
    {enabled:false, title:"Another conference", meta:"Year · Location", description:"", image:"", shape:"square", url:""}
  ],
  talks: [
    {enabled:true, title:"Talk title", meta:"Date · Host institution", description:"Presentation details to be added.", image:"", shape:"portrait", url:""}
  ],
  blogArticles: [
    {enabled:true, title:"SpaceAustralia article", meta:"Science writing", description:"Article image and link to be added.", image:"", shape:"landscape", url:""}
  ],
  galleryCategories: [
    {enabled:true, title:"Research Plots", image:"", shape:"square", url:""},
    {enabled:true, title:"Outreach and Events", image:"", shape:"square", url:""},
    {enabled:true, title:"Research Life", image:"", shape:"square", url:""},
    {enabled:true, title:"Videos", image:"", shape:"square", url:""},
    {enabled:true, title:"Astrophotography", image:"", shape:"square", url:""},
    {enabled:true, title:"Diagrams", image:"", shape:"square", url:""}
  ]
};
