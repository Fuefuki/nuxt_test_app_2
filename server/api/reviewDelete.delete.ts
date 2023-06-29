import client from './client'

export default defineEventHandler(async (event) => {
  const params = await readBody(event)
  const id = params.id

  client.delete({
    endpoint: 'reviews',
    contentId: String(id),
  })
  .catch(function(err){
    console.log (err)
  })
})