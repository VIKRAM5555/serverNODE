
import express from 'express'
import {clients} from "../index.js"



var apps=express.Router()



router.post("/", async (req, res) => {
   
      let stud = await student.findById(req.body.studentId);
      const oldMentorId = stud.mentorAssigned; 
      stud.mentorAssigned = req.body.newMentorId;
      stud.save();
     
      let oldment = await mentor.findById(oldMentorId);
  
      if (oldment.studentsAssigned.length < 0) {
        console.log("oldment");
        return;
      } else {
        let newAssigned = oldment.studentsAssigned;
        const indexpos = newAssigned.indexOf(objId(req.body.studentId));
        console.log(indexpos, "index");
        newAssigned.pop(indexpos);
        console.log(newAssigned);
        oldment.studentsAssigned = newAssigned;
      }
  
      
      oldment.save();
  
      
      let newment = await mentor.findById(req.body.newMentorId);
      if (newment.studentsAssigned.length < 0) {
        return;
      } else {
        if (!newment.studentsAssigned.includes(req.body.studentId)) {
          newment.studentsAssigned = [
            ...newment.studentsAssigned,
            req.body.studentId,
          ];
        }
      }
      newment.save();
  
 
  });
  
  module.exports = router;