# JPJR / Je prends, je rends

Créé par **Les Frères Poulain**.

JPJR est une petite application web développée avec Flask pour gérer un inventaire d'objets et suivre les emprunts. Elle intègre une interface d'administration, une API JSON et des commandes vocales optionnelles via OpenAI.

**Vidéo de présentation du projet :** [Lien YouTube](https://www.youtube.com/watch?v=ZFS_MIF8jPY&t)

## ✨ Fonctionnalités Clés

*   🗃️ **Gestion d'Inventaire Détaillée :** Organisez avec précision vos articles, utilisateurs et emplacements de stockage (zones, meubles, tiroirs).
*   🤝 **Suivi d'Emprunts Efficace :** Enregistrez les prêts, définissez des dates de retour et gardez un œil sur les articles empruntés.
*   📦 **Flexibilité des Articles : Conventionnels & Temporaires**
    *   **Articles Conventionnels :** Vos objets permanents, soigneusement rangés avec un emplacement fixe (ex: "Zone: Bureau, Meuble: Étagère").
    *   **Articles Temporaires :** Pour les besoins du moment ! Créez-les à la volée, souvent par une simple commande vocale (ex: "piles").
*   🔌 **API JSON Robuste :** Intégrez JPJR à d'autres outils ou services grâce à des points de terminaison complets pour les articles, prêts, emplacements et services d'IA.
*   🎙️ **Commandes Vocales Intelligentes (propulsées par 4o Transcribe et GPT-4o-mini) :**
    *   **Depuis le Tableau de Bord (Dashboard) :**
        *   ⚡ **Ajout Rapide "Temporaire" :** Dictez et ajoutez instantanément des articles sans emplacement prédéfini.
        *   🧠 **Mode "Complet" (Recherche/Ajout Intelligent) :** L'IA identifie vos articles, les rapproche de votre inventaire existant ou crée de nouveaux articles temporaires. (Note : peut solliciter davantage l'API pour une pertinence accrue).
    *   🏠 **Page Dédiée "Ajout Vocal Conventionnel" :** Dictez le nom de l'article ET son emplacement (Zone, Meuble, Tiroir) pour l'intégrer parfaitement à votre système de rangement, avec l'aide de l'IA pour un rapprochement intelligent.
*   💬 **Dialogue avec vos Données (via GPT-4o-mini) :** Posez des questions en langage naturel sur votre inventaire directement depuis la barre de menu !
*   📄 **Export PDF Pratique :** Obtenez une copie de votre inventaire complet au format PDF en un clic.

## 🗄️ Base de Données : PostgreSQL