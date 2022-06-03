app.post('/login', (req, res) => {
    const userid = req.body.userid
    const userpw = req.body.userpw


    if (userid === user.userid && userpw === user.userpw) {
        res.setHeader('Set-Cookie', `id=${userid}`)
        res.redirect('/')
    }
    else {
        res.redirect('/login?err=true')
    }
})