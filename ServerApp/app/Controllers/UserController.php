<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Firebase\JWT\JWT;
use Doctrine\ORM\EntityManager;

use App\Models\UserModel ;

class UserController{
  //*
  private EntityManager $m_entityManager;
  public function __construct(EntityManager $entityManager) {
    $this->m_entityManager = $entityManager;
  }
  //*/


  public function login(Request $request, Response $response, array $args): Response
  {
    $data = $request->getParsedBody();

    $login = $data["login"] ?? "";
    $password = $data["password"] ?? "";

    $user = new UserModel();
    $user->login = $login ;
    $user->password = $password ;

    /*
    $response->getBody()->write(json_encode([
      "success" => true,
      "user" => $user
    ]));
    return $response->withHeader("Content-Type", "application/json");

    //*/

    $repository = $this->m_entityManager->getRepository("Client");
    $client = $repository->findOneBy(["login" => $login]);

    if ($client == null || $client->getPassword() != $password) {
        $response->getBody()->write(json_encode([
          "success" => false,
          "user" => $user
        ]));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(401);
    }

    if ($login != "quentin" || $password != "-") {
      $response->getBody()->write(json_encode([
        "success" => true,
        "user" => $user
      ]));
      return $response->withHeader("Content-Type", "application/json");
    }

    $issuedAt = time();

    $payload = [
        "user" => [$user],
        "iat" => $issuedAt,
        "exp" => $issuedAt + 60 // 60 secondes
    ];

    $token_jwt = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");

    $response->getBody()->write(json_encode([
      "success" => true,
      "user" => $user
    ]));
    return $response
        ->withHeader("Authorization", $token_jwt)
        ->withHeader("Content-Type", "application/json");
  }

  public function register(Request $request, Response $response, array $args): Response{
    $data = $request->getParsedBody();

    $userRequest = new UserModel();

    $userRequest->name = $data['name'] ?? "";
    $userRequest->surname = $data['surname'] ?? "";
    $userRequest->address = $data['address'] ?? "";
    $userRequest->postal_code = $data['postal_code'] ?? "";
    $userRequest->city = $data['city'] ?? "";
    $userRequest->phone = $data['phone'] ?? "";
    $userRequest->email = $data['email'] ?? "";
    $userRequest->civility = $data['civility'] ?? "";
    $userRequest->login = $data['login'] ?? "";
    $userRequest->password = $data['password'] ?? "";

    // DETERMINER SI C4EST BON
    $requestOK = false ;

    $response->getBody()->write(json_encode([
      "success" => $requestOK,
      "user" => $userRequest
    ]));
    return $response->withHeader("Content-Type", "application/json");
  }
}
