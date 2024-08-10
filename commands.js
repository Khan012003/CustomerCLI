#!/usr/bin/env node

const { program } = require('commander');

const{
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}=require('./index');

program
  .version('1.0.0')
  .description('Client Management System')

  //Add commands
program  
  .command('add <firstname> <lastname> <phone> <email>')
  .alias('a')
  .description('Add a Customer')
  .action((firstname, lastname, phone, email)=>{
    addCustomer({firstname, lastname, phone, email});
  });
 

  //Find commands
program
  .command('find <name>')
  .alias('f')
  .description('Find a Customer')
  .action(name => findCustomer(name));


//  Update Commands

program  
  .command('update <_id> ')
  .alias('u')
  .description('Update a Customer')
  .action(_id => {
    prompt(questions).then(answer)
  });
  
//remove Commands
program  
.command('remove <_id> ')
.alias('r')
.description('rempve a Customer')
.action(_id => removeCustomer(_id));

//  List Commands

program  
  .command('list ')
  .alias('l')
  .description('List of Customer')
  .action(()=> listCustomer()
  );

program
  .parse(process.argv);