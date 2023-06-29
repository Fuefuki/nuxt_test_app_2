import client from './client'
import { Review } from '../../types/review'

export default defineEventHandler(async (event) => {
    const params = await readBody(event)
    const id = params.id
    const title = params.title
    const body = params.body

    await client.update<Review>({
        endpoint: 'reviews',
        contentId: String(id),
        content:{
            title: String(title),
            body: String(body)
        }
    })
    .then(function(res){
        console.log(res.id)
    })
    .catch(function(err){
        console.log (err)
    })
    return sendRedirect(event, "/lists/")
})