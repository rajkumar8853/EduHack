

const express = require('express');
const router = express.Router();
const db = require('./db-config'); 
const multer = require('./multer-config'); 
const path = require('path');
const bcrypt = require('bcrypt'); 




router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/submit_complaint.html',  (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/submit_complaint.html'));
});

router.get('/admin_dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/admin_dashboard.html'));
});

router.get('/track_complaint.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/track_complaint.html'));
});


router.get('/roadmaps/index.html',(req, res)=>
{
    res.sendFile(path.join(__dirname,'../roadmaps/index.html'));
})
router.get('/about.html',(req, res)=>
    {
        res.sendFile(path.join(__dirname,'../carrer_path/mpc/mpc.html'));
    })
    router.get('/maths.html',(req, res)=>
        {
            res.sendFile(path.join(__dirname,'../carrer_path/mpc/maths.html'));
        })
        router.get('/subtopics.html',(req, res)=>
            {
                res.sendFile(path.join(__dirname,'../carrer_path/mpc/subtopics.html'));
            })
            router.get('/login',(req,res)=>
            {
                res.sendFile(path.join(__dirname, '../public/views/complaints.html'));

            })
        
module.exports = router;
