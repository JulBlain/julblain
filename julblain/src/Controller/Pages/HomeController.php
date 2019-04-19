<?php

namespace App\Controller\Pages;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Notification\ContactNotification;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Twig\Environment;

class HomeController extends AbstractController
{


    /**
     * @Route("/accueil/", name="home")
     * @param Request $request
     * @param ContactNotification $notification
     * @return Response
     */
    public function home(Request $request, ContactNotification $notification): Response {

        /*home formulaire*/
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);

        /*traitement du form*/
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /*TODO faire envoie email*/
            $notification->notify($contact);
           $this->addFlash('success', 'Votre message a bien été envoyé.');

           /*fragment generate url with anchor */
            return $this->redirectToRoute('home',['_fragment' => 'homeContact']);
        }

        /*return view*/
        return new Response($this->renderView('pages/home.html.twig', [
            'form' => $form->createView()
        ]));
    }
}