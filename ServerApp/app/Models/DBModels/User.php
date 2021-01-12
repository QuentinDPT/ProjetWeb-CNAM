<?php

namespace App\Models\DBModels;

class User
{
    private $id;
    private $name;
    private $surname;
    private $adresse;
    private $postal_code;
    private $city;
    private $phone;
    private $email;
    private $civility;
    private $login;
    private $password;

    public function getId() { return $this->id; }

    public function getName() { return $this->name; }
    public function setName($name = null) {
      $this->nom = $name;
    }

    public function getSurname() { return $this->surname; }
    public function setSurname($surname = null) {
      $this->prenom = $surname;
    }

    public function getAdresse() { return $this->adresse; }
    public function setAdresse($adresse = null) {
      $this->adresse = $adresse;
    }

    public function getPostalCode() { return $this->postal_code; }
    public function setPostalCode($postal_code = null) {
      $this->postal_code = $postal_code;
    }

    public function getCity() { return $this->city; }
    public function setCity($city = null) {
      $this->city = $city;
    }

    public function getPhoneNumber() { return $this->phone; }
    public function setPhoneNumber($phone = null) {
      $this->phone = $phone;
    }

    public function getEmail() { return $this->email; }
    public function setEmail($email = null) {
      $this->email = $email;
    }

    public function getCivility() { return $this->civility; }
    public function setCivility($civility = null) {
      $this->civility = $civility;
    }

    public function getLogin() { return $this->login; }
    public function setLogin($login = null) {
      $this->login = $login;
    }

    public function getPassword() { return $this->password; }
    public function setPassword($password = null) {
      $this->password = $password;
    }

}
