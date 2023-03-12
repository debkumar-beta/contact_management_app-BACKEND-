//@desc Get all contacts
//@routes GET /api/contacts
//@access public
const asyncHandler =require("express-async-handler");
const Contact= require("../models/contactModel");


const getContacts =asyncHandler(async(req,res) => {
    const contacts=await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
});

const createContact =asyncHandler(async(req,res) => {
    console.log(req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    });
    res.status(200).json({message:"create Contacts"});
});

const updateContact =asyncHandler(async(req,res) => {
    const contact =await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact does not exist");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User Don't have permission to access the contact!");
    }
    const updatedContact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}

);
        
    res.status(200).json(updatedContact);
});

const getContact =asyncHandler(async(req,res) => {
    const contact =await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact does not exist");
    }
    res.status(200).json(contact);
   
    
});

const deleteContact =asyncHandler(async(req,res) => {
    const contact =await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact does not exist");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User Don't have permission to access the contact!");
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    createContact,
    updateContact,
    getContact,
    deleteContact
};