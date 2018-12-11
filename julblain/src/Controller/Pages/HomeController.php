<?php

namespace App\Controller\Pages;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Twig\Environment;

class HomeController extends AbstractController
{


    /**
     * @Route("/accueil", name="home")
     * @return Response
     */
    public function home(): Response {
        return new Response($this->renderView('pages/home.html.twig'));
    }
}