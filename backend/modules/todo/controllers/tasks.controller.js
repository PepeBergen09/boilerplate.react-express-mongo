const Task = require('../models/tasks.model') 

exports.getTasks = (req, res) => {
    const tasks = Tasks.find()
        .select("_id title")
        .then(tasks => {
            res.json({ tasks });
        })
        .catch(err => console.log(err))
};

exports.createTask = (req, res, next) => {
    const tasks = new Task({
        title: req.body.title,
        body: req.body.body

    })
        tasks.save(tasks)
            .then(data => res.json(data))
            .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the Tutorial."
                });
              });
        }

// with pagination
exports.getPosts = async (req, res) => {
    // get current page from req.query or use default value of 1
    const currentPage = req.query.page || 1;
    // return 3 posts per page
    const perPage = 6;
    let totalItems;

    const posts = await Post.find()
        // countDocuments() gives you total count of posts
        .countDocuments()
        .then(count => {
            totalItems = count;
            return Post.find()
                .skip((currentPage - 1) * perPage)
                .populate('comments', 'text created')
                .populate('comments.postedBy', '_id name')
                .populate('postedBy', '_id name')
                .select('_id title body created likes')
                .limit(perPage)
                .sort({ created: -1 });
        })
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => console.log(err));
};