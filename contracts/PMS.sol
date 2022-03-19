// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

  contract PMS {

     struct Data {
         uint id;
         address user;
         string entity;
         string username;
         string password;
     }

  
  string public loggedInUser;

     Data[] public newData;
     uint nextId = 0;

     Data[] public trash;

   function CreateCred(string memory user,string memory entity,string memory pass) public {
     
          newData.push(Data(nextId,msg.sender,entity,user,pass));
          nextId++;
   }
    

   function len() public view returns(uint) {
        return newData.length;
   }


   function tlen() public view returns(uint) {
        return trash.length;
   }
   

   function update(uint id , string memory pass ) public {
         uint i = find(id);
         newData[i].password =  pass;
   }

   function addToTrash(uint id ) public {
         uint i = find(id);
        trash.push(newData[i]);
   }

   function destroy(uint index) public {

   addToTrash(index);

     for(uint i = index; i < newData.length-1; i++) {
        newData[i] = newData[i+1];
     }
     newData.pop();
   }

   function destroyPermanently(uint index) public {

    for(uint i = index; i < trash.length-1; i++) {
        trash[i] = trash[i+1];
     }
     trash.pop();
   }


   function find(uint id) view internal returns(uint) {
    for(uint i = 0; i < newData.length; i++) {
      if(newData[i].id == id) {
        return i;
      }
    }
    revert('Data does not exist!');
   }


   function findTrash(uint id) view internal returns(Data memory) {
    for(uint i = 0; i < trash.length; i++) {
      if(trash[i].id == id) {
        return trash[i];
      }
    }
    revert('Data does not exist!');
   }


  }