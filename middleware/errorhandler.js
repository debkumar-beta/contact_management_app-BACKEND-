const errorhandler=(err,req,res,next)=>{
const statuscode= res.statusCode ? res.statusCode:500;
const { constants } =require("../contraints");
switch (statuscode) {
    case constants.VALIDATION_ERROR:
        res.json({title:"Validation Failed!" ,message: err.message, stackTrace: err.stack});
        break;
    case constants.NOT_FOUND:
        res.json({title:"NOT FOUND" ,message: err.message, stackTrace: err.stack});        
        break;    
    case constants.FORBIDDEN:
        res.json({title:"FORBIDDEN" ,message: err.message, stackTrace: err.stack});        
        break;    
    case constants.UNAUTHORIZED:
        res.json({title:"UNAUTHORIZED" ,message: err.message, stackTrace: err.stack});        
        break;    
    case constants.SERVER_ERROR:
        res.json({title:"SERVER ERROR" ,message: err.message, stackTrace: err.stack});        
        break;    
                            
    default:
        console.log("NO error");
        break;
}



};