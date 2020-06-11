function lados(){
  var x=document.getElementById('um').value;
  var y=document.getElementById('dois').value;
  var z=document.getElementById('tres').value;

    
  
  if( x!=z && y!=x && z!=y ){
   
     document.write('<img src="https://blog.professorferretto.com.br/wp-content/uploads/2018/03/04.png" width="90%">');
  }
  else if(x==y && y==z && z==x){
   
     document.write('<img src="  https://4.bp.blogspot.com/-X1JefSkbg-M/UwyDcfGoamI/AAAAAAAABog/91stHygx4hE/s1600/tri%C3%A2ngulo+equil%C3%A1tero.png" width="90%">');
  }
  else if(x==y || y==z || z==x){
     document.write('<img src="https://matematicabasica.net/wp-content/uploads/2019/02/triangulo-isosceles-2.png" width="90%">');
  }

}
