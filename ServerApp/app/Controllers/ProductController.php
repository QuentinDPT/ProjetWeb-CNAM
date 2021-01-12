<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Firebase\JWT\JWT;

use App\Models\ProductModel ;

class ProductController{
  public function getAll(Request $request, Response $response, array $args): Response
  {
    $response->getBody()->write(json_encode(
      [
        new ProductModel(
          "Sharks - Maelstrom",
          4.50,
          "https://i1.sndcdn.com/artworks-000551457822-zb6un4-t500x500.jpg",
          "Sharks, un tout nouvel artiste",
          4.6
        ),
        new ProductModel(
          "Virtual Riot - Heavy bass desing",
          23.00,
          "https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_auto/c_limit,w_450/v1605714644/1605714617.jpg",
          "Un sample pack",
          5
        ),
        new ProductModel(
          "Trinergy - Miracle/Bye",
          4.50,
          "https://geo-static.traxsource.com/files/images/6c4d6fcb7f99246db93437a2a45bb3bc.jpg",
          "Pour une fois, un artiste de NSD",
          4
        ),
        new ProductModel(
          "Virtual Riot - German Engineering",
          9.50,
          "https://e.snmc.io/i/600/w/dc8f1ed5f653cfeea2c92df9828682e7/6856915",
          "Virtual Riot nous emmène dans son pays natal: l'Allemagne, et vous ne risquez pas d'être décu.",
          4.5
        ),
        new ProductModel(
          "Virutal Riot - Save Yourself",
          7.5,
          "https://images.genius.com/9b5cd28311b6926bdb9218218881abef.1000x1000x1.jpg",
          "Un album original. Des origines de différents genres : Drum and Bass, Psy-trance, Future Bass, mais toujours avec une bonne base Dubstep.",
          4.9
        ),
        new ProductModel(
          "Virtual Riot - Throwback",
          7.50,
          "https://ukf-cdn-2ezlhsfwy1f.stackpathdns.com/wp-content/uploads/2017/02/vr_throw_back_ep_art_1440px.jpg",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "Barely Alive VS Virtual Riot - Head To Head",
          5,
          "https://i.redd.it/5x6yadl4a1k51.jpg",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "Phase One - Transcendency",
          5,
          "https://cdn.shopify.com/s/files/1/1211/1830/files/a_TRANSCENDECY_FRONT_large.jpg?v=1556673300",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "Barely Alive - Odyssey",
          5,
          "https://img.discogs.com/tOcQ5kyTisVk4HZZdHIZ0t1T1ig=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12396872-1534439298-1141.jpeg.jpg",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "Barely Alive - Multiplayer",
          5,
          "https://img.discogs.com/vyyVVSA5KTFdsyAs8cCMJYCfVTI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13834743-1562179866-9499.png.jpg",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "DISCIPLE 06 - Mark Of The Beast",
          5,
          "https://pbs.twimg.com/media/DzE07uQU0AECmFj.jpg",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "Eliminate x Shaq - Tear It Up",
          5,
          "https://geo-static.traxsource.com/files/images/f48f338e17358ce836f1b01a150c3168.jpg",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "Eliminate - Cyber Whale",
          5,
          "https://e.snmc.io/i/600/w/2c6359b5dd953c9b746e038f7304434a/7431399",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "DISCIPLE - Alliance Vol.4",
          5,
          "https://i1.sndcdn.com/artworks-000375860190-93m6so-t500x500.jpg",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "Zomboy - Born To Survive",
          5,
          "https://handsupelectro.fr/wp-content/uploads/2019/02/zomboy-bts.jpg",
          "DESCRIPTION",
          3
        ),
        new ProductModel(
          "DISCIPLE - Alliance Vol.6",
          9.99,
          "https://images.genius.com/6152bbe254570c095aa32d1997d67eec.1000x1000x1.jpg",
          "Tout beau tout fais, ils remettent ca.",
          5
        )
      ]));

    return $response
        ->withHeader("Content-Type", "application/json");
  }
}
