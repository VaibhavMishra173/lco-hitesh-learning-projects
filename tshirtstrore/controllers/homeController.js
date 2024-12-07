const BigPromise = require('../middlewares/bigPromise')



// exports.home = (req, res)=> {
//     res.status(200).json({
//         success: true,
//         greetings: " hello from home controller ",
//     });
// };


exports.home = BigPromise(async (req, res)=> {
    // const db = await 
    res.status(200).json({
        success: true,
        greetings: " hello from home controller ",
    });
});



exports.homeDummy = async (req, res)=> {

    try {
         // const db = await 
        res.status(200).json({
            success: true,
            greetings: " hello from home dummy controller ",
        });
        
    } catch (error) {
        console.log(error);        
    }
};