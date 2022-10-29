import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/game' , (req : Request , res : Response) => {
    res.render("layout" , {
        title : 'omda'
    })
})

export default router
