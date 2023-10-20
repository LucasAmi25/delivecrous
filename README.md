Readme Front

Pour lancer le projet, il faut exécuter ces commandes :

    npm install
    npx expo --web

Nous avons implémenté les fonctionnalités suivantes :

    Une page pour lister les plats proposés, comprenant une image du produit (à titre indicatif), un titre et une description.
    Un filtre par catégorie.
    Détail des plats.
    Ajout du plat au panier.
    L'application propose un système de panier, avec un récapitulatif des plats sélectionnés. Vous pouvez modifier la quantité des plats et les supprimer du panier.
    Une dernière page de succès pour confirmer que la commande a été prise en compte.
    Vous pouvez gérer l'authentification de l'utilisateur depuis la page d'accueil de l'application.
    Un icône utilisateur est disponible dans le coin supérieur de l'application. En cliquant dessus, vous serez redirigé vers une page affichant les informations de l'utilisateur connecté, y compris l'historique de ses commandes et le suivi de la commande en cours.

Nous n'avons pas implémenté les fonctionnalités suivantes :

    L'affichage du prix.
    L'intégration entre le backend et le frontend.
    La personnalisation de l'application.
    L'ajout de fonctionnalités supplémentaires.

J'ai ajouté des commentaires partout où des requêtes devaient être effectuées. Nous avons essayé de résoudre le problème lié à la "CORS POLICY", mais nous n'avons pas réussi. Par conséquent, les requêtes fonctionnent depuis des logiciels tiers comme Postman, mais pas directement depuis le code. Pour plus d'informations, consultez le readme du backend.
