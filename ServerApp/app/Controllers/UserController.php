<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Firebase\JWT\JWT;

use App\Models\UserModel ;

class UserController{
  public function login(Request $request, Response $response, array $args): Response
  {
    $data = $request->getParsedBody();

    $login = $data["login"] ?? "";
    $password = $data["password"] ?? "";

    $response->getBody()->write(json_encode([
      "success" => true,
      "name" => $login,
      "password" => $password
    ]));
    return $response ;

    if ($login != "quentin" || $password != "-") {
      $response->getBody()->write(json_encode([
        "success" => false,
        "name" => $login,
        "password" => $password
      ]));
      return $response->withHeader("Content-Type", "application/json");;
    }

    $issuedAt = time();

    $payload = [
        "user" => [new UserModel()],
        "iat" => $issuedAt,
        "exp" => $issuedAt + 60 // 60 secondes
    ];

    $token_jwt = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");

    $response->getBody()->write(json_encode([
        "success" => true
    ]));
    return $response
        ->withHeader("Authorization", $token_jwt)
        ->withHeader("Content-Type", "application/json");
  }

  public function register(Request $request, Response $response, array $args): Response{
    $user = $request->get();
    $response->getBody()->write("Register");
    return $response;
  }
}