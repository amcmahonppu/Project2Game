Inventory = function(){
  var chr = {
    items:[]
  }

 chr.addItem = function(id, amount) {
  for(var i=0; i < self.items.length; i++){
    if(chr.items[i].id === id){
        chr.items[i].amount += amount;

      return;
    }
  }
  chr.items.push({id:id, amount:amount});
}

 chr.removeItem = function(id, amount){
  for(var i=0; i < self.items.length; i++){
    if(chr.items[i].id === id){
        chr.items[i].amount -= amount;
         if(chr.items[i].amount <= 0)
          chr.items.splice(i,1);

        return;
    }
  }
}

 chr.hasItem = function(id, amount){
   for(var i=0; i < self.items.length; i++){
     if(chr.items[i].id === id){
       return chr.items[i].amount >= amount;

    }
  }
    return false;
}

chr.refreshRender = function(){

}

 return chr;
}

Item = function(id,name,event){
  var chr = {
    id:id,
    name:name,
    event:event,
  }
  return chr;
}
