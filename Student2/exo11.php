<?php

$numbers = [];

for ($i=0; $i<100; $i++) {
  $numbers[$i] = rand(10,1000);
}

function SortArray($arr){
  for($i = 0; $i < $n; $i++){ 
      for ($j = 0; $j < $n - $i - 1; $j++){ 
          if ($arr[$j] > $arr[$j+1]) 
          { 
              $t = $arr[$j]; 
              $arr[$j] = $arr[$j+1]; 
              $arr[$j+1] = $t; 
          } 
      } 
  }
}

$len = count($numbers); 
SortArray($numbers); 
  print_r($len);


  for ($i = 0; $i < $len; $i++) 
    echo $numbers[$i]." ";  
  

?> 