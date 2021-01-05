<?php

namespace App\Models;

class ProductModel{
  public $id;
  public $name;
  public $price;
  public $image_url;
  public $description;
  public $note;

  private static $_ID = 0;

  function __construct($name, $price, $image_url, $description, $note){
    $this->name = $name ;
    $this->price = $price ;
    $this->image_url = $image_url ;
    $this->description = $description ;
    $this->note = $note ;
    $this->id = self::$_ID++ ;
  }
}
