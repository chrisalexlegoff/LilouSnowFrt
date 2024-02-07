import Link from "next/link";
import React from "react";
import { sectionsProps } from "../../../lib/interfaces/interfaces";

const SectionDeux = ({ logoWhite }: sectionsProps) => {
  return (
    <section
      id="section-2"
      className={`min-h-screen w-full bg-blanc ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto py-14 w-10/12">
        <h2 className="pt-12 pb-4">1 - Présentation du site</h2>
        <p className="pt-6 text-justify">
          En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l’économie numérique, les différents intervenants du
          site dans le cadre de sa réalisation et de son suivi :
        </p>
        <p className="pt-6 text-justify">
          Propriétaire : Laureen PICHON - 79764061200025, SARL auteur au capital
          de €. Le propriétaire du site internet est joignable à cette adresse :
          <Link href="mailto:lilousnow.cica@gmail.com">
            {" "}
            lilousnow.cica@gmail.com
          </Link>
        </p>
        <p className="pt-6 text-justify">
          Adresse : 819 AV DE DUNKERQUE 59160 LILLE
        </p>
        <p className="pt-6 text-justify">
          Créateur du site : Christophe Le Goff -{" "}
          <Link href="mailto:contact@christophe-le-goff.com">
            contact@christophe-le-goff.com
          </Link>
        </p>
        <p className="pt-6 text-justify">
          Responsable publication : Laureen PICHON -{" "}
          <Link href="mailto:lilousnow.cica@gmail.com">
            lilousnow.cica@gmail.com
          </Link>
        </p>
        <p className="pt-6 text-justify">
          Webmaster : Christophe Le Goff -{" "}
          <Link href="mailto:contact@christophe-le-goff.com">
            contact@christophe-le-goff.com
          </Link>
        </p>
        <p className="pt-6 text-justify">
          Hébergeur : Infomaniak Rue Eugène Marziano 25 1227 Les Acacias (GE)
        </p>
        <p className="pt-6 text-justify">
          Crédits : Ces mentions légales sont offertes par Le Générateur de
          Mentions Légales du Site Français
        </p>
        <h2 className="pt-12 pb-4">2 -Conditions d'utilisation</h2>
        <p className="pt-6 text-justify">
          L’utilisation du site implique l’acceptation pleine et entière des
          conditions générales d’utilisation ci-après décrites. Ces conditions
          d’utilisation sont susceptibles d’être modifiées ou complétées à tout
          moment, les utilisateurs du site sont donc invités à les consulter de
          manière régulière.
        </p>
        <p className="pt-6 text-justify">
          Le site est mis à jour régulièrement par Laureen PICHON. De la même
          façon, les mentions légales peuvent être modifiées à tout moment :
          elles s’imposent néanmoins à l’utilisateur qui est invité à s’y
          référer le plus souvent possible afin d’en prendre connaissance.
        </p>
        <h2 className="pt-12 pb-4">3 - Services fournis</h2>{" "}
        <p className="pt-6 text-justify">
          Laureen PICHON, s’efforce de fournir sur le site des informations
          aussi précises que possible.
        </p>
        <p className="pt-6 text-justify">
          Toutefois, il ne pourra être tenue responsable des omissions, des
          inexactitudes et des carences dans la mise à jour, qu’elles soient de
          son fait ou du fait des tiers partenaires qui lui fournissent ces
          informations. Tous les informations indiquées sur le site
          {"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> sont données à
          titre indicatif, et sont susceptibles d’évoluer. Aussi, toutes les
          informations indiquées sur le site Site{" "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> sont données à
          titre indicatif, et sont susceptibles de changer ou d’évoluer sans
          préavis.
        </p>
        <p className="pt-6 text-justify">
          Si vous constatez une lacune, erreur ou ce qui parait être un
          dysfonctionnement, merci de bien vouloir le signaler par email, à
          l’adresse{" "}
          <Link href="mailto:lilousnow.cica@gmail.com">
            lilousnow.cica@gmail.com
          </Link>
          , en décrivant le problème de la manière la plus précise possible
          (vous vous trouver sur un téléphone, une tablette ou bien un
          ordinateur ; nom de la page qui pose problème, type de système
          d’exploitation, navigateur utilisé,…). Laureen PICHON n’est en aucun
          cas responsable de l’utilisation faite de ces informations, etde tout
          préjudice direct ou indirect pouvant en découler.
        </p>
        <h2 className="pt-12 pb-4">
          4 - Propriété intellectuelle et contrefaçons
        </h2>{" "}
        <p className="pt-6 text-justify">
          Laureen PICHON est le propriétaire des droits de propriété
          intellectuelle ou détient les droits d’usage sur tous les éléments
          accessibles sur le site, notamment les textes, images, graphismes,
          logo, icônes, sons, logiciels.
        </p>
        <p className="pt-6 text-justify">
          Toute reproduction, représentation, modification, publication,
          distribution, retransmission, adaptation de tout ou partie des
          éléments du site, quel que soit le moyen ou le procédé utilisé, est
          interdite, sauf autorisation écrite préalable de :{"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> Toute
          exploitation non autorisée du site ou de l’un quelconque des éléments
          qu’il contient, par quelque procédé que ce soit, sera considérée comme
          constitutive d’une contrefaçon et poursuivie conformément aux
          dispositions des articles L.335-2 et suivants du Code de Propriété
          Intellectuelle.
        </p>
        <p className="pt-6 text-justify">
          Le non-respect de cette interdiction constitue une contrefaçon pouvant
          engager la responsabilité civile et pénale du contrefacteur. En outre,
          les propriétaires des Contenus copiés pourraient intenter une action
          en justice à votre encontre.
        </p>
        <h2 className="pt-12 pb-4">5 - Limitations de responsabilités</h2>
        <p className="pt-6 text-justify">
          L’utilisateur du site s’engage à accéder au site en utilisant un
          matériel récent, ne contenant pas de virus et avec un navigateur de
          dernière génération mis-à-jour.
        </p>
        <p className="pt-6 text-justify">
          Laureen PICHON ne pourra être tenue responsable des dommages directs
          et indirects causés au matériel de l’utilisateur, lors de l’accès au
          site <Link href="https://lilousnow.fr">lilousnow.fr</Link> et
          résultant soit de l’utilisation d’un matériel ne répondant pas aux
          spécifications indiquées ci-dessus, soit de l’apparition d’un bug ou
          d’une incompatibilité. Laureen PICHON ne pourra également être tenue
          responsable des dommages indirects (tels par exemple qu’une perte de
          marché ou perte d’une chance) consécutifs à l’utilisation du site{" "}
          {"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link>{" "}
        </p>
        <p className="pt-6 text-justify">
          Des espaces interactifs (possibilité de poser des questions dans
          l’espace contact) sont à la disposition des utilisateurs. Laureen
          PICHON se réserve le droit de supprimer, sans mise en demeure
          préalable, tout contenu déposé dans cet espace qui contreviendrait à
          la législation applicable en France, en particulier aux dispositions
          relatives à la protection des données. Le cas échéant, Laureen PICHON
          se réserve aussi la possibilité de mettre en cause la responsabilité
          civile et/ou pénale de l’utilisateur, notamment en cas de message à
          caractère diffamant, raciste, injurieux ou pornographique, quel que
          soit le support utilisé (texte, vidéo, photographie…).
        </p>
        <h2 className="pt-12 pb-4">6 - Gestion des données personnelles.</h2>
        <p className="pt-6 text-justify">
          En France, les données personnelles sont notamment protégées par la
          loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
          l’article L. 226-13 du Code pénal et la Directive Européenne du 24
          octobre 1995.
        </p>{" "}
        <p className="pt-6 text-justify">
          A l’occasion de l’utilisation du site {"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> peuvent être
          recueillies : l’URL des liens par l’intermédiaire desquels
          l’utilisateur a accédé à ce site, le fournisseur d’accès
          del’utilisateur, l’adresse de protocole Internet (IP) de
          l’utilisateur.
        </p>
        <p className="pt-6 text-justify">
          En tout état de cause Laureen PICHON ne collecte des informations
          personnelles relatives à l’utilisateur que pour le besoin de certains
          services proposés par le site {"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> L’utilisateur
          fournit ces informations en toute connaissance de cause, notamment
          lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à
          l’utilisateur du site {"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> l’obligation ou
          non de fournir ces informations.
        </p>
        <p className="pt-6 text-justify">
          Conformément aux dispositions des articles 38 et suivants de la loi
          78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux
          libertés, tout utilisateur dispose d’un droit d’accès, de
          rectification et d’opposition aux données personnelles le concernant,
          en effectuant sa demande écrite et signée, accompagnée d’une copie du
          titre d’identité avec signature du titulaire de la pièce, en précisant
          l’adresse à laquelle la réponse doit être envoyée.
        </p>
        <p className="pt-6 text-justify">
          Aucune information personnelle de l’utilisateur du site
          {"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> n’est publiée à
          l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un
          support quelconque à des tiers. Seule l’hypothèse du rachat de Laureen
          PICHON et/ou du site internet de ses droits permettrait la
          transmission des dites informations à l’éventuel acquéreur qui serait
          à son tour tenu de la même obligation de conservation et de
          modification des données vis à vis de l’utilisateur du site.
        </p>
        <p className="pt-6 text-justify">
          Les bases de données sont protégées par les dispositions de la loi du
          1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
          relative à la protection juridique des bases de données.
        </p>
        <h2 className="pt-12 pb-4">7 - Liens hypertextes et cookies</h2>
        <p className="pt-6 text-justify">
          Le site {"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> peut contenir un
          certain nombre de liens hypertextes vers d’autres sites, mis en place
          avec l’autorisation de Laureen PICHON.
        </p>
        <p className="pt-6 text-justify">
          Cependant, Laureen PICHON n’a pas la possibilité de vérifier le
          contenu des sites ainsi visités, et n’assumera en conséquence aucune
          responsabilité de ce fait.
        </p>
        <p className="pt-6 text-justify">
          La navigation sur le site {"  "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> est susceptible
          de provoquer l’installation de cookie(s) sur l’ordinateur de
          l’utilisateur.
        </p>
        <p className="pt-6 text-justify">
          Un cookie est un fichier de petite taille, qui ne permet pas
          l’identification de l’utilisateur, mais qui enregistre des
          informations relatives à la navigation d’un ordinateur sur un site.
          Les données ainsi obtenues visent à faciliter la navigation ultérieure
          sur le site, et ont également vocation à permettre diverses mesures de
          fréquentation.
        </p>
        <p className="pt-6 text-justify">
          Le refus d’installation d’un cookie peut entraîner l’impossibilité
          d’accéder à certains services. L’utilisateur peut toutefois configurer
          son ordinateur de la manière suivante, pour refuser l’installation des
          cookies :{" "}
        </p>
        <p className="pt-2 text-justify">
          # Sous Internet Explorer : onglet outil (pictogramme en forme de
          rouage en haut a droite) / options internet. Cliquez sur
          Confidentialité et choisissez Bloquer tous les cookies. Validez sur
          Ok.
        </p>
        <p className="pt-2 text-justify">
          # Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le
          bouton Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet
          Vie privée. Paramétrez les Règles de conservation sur : utiliser les
          paramètres personnalisés pour l’historique. Enfin décochez-la pour
          désactiver les cookies.
        </p>
        <p className="pt-2 text-justify">
          # Sous Safari : Cliquez en haut à droite du navigateur sur le
          pictogramme de menu(symbolisé par un rouage). Sélectionnez Paramètres.
          Cliquez sur Afficher les paramètres avancés. Dans la section
          “Confidentialité”, cliquez sur Paramètres de contenu. Dans la section
          “Cookies”, vous pouvez bloquer les cookies.
        </p>
        <p className="pt-2 text-justify">
          # Sous Chrome : Cliquez en haut à droite du navigateur sur le
          pictogramme de menu (symbolisé par trois lignes horizontales).
          Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés.
          Dans la section “Confidentialité”, cliquez sur préférences. Dans
          l’onglet “Confidentialité”, vous pouvez bloquer les cookies.
        </p>
        <p className="pt-6 text-justify">
          Les liens hypertextes mis en place dans le cadre du présent site
          internet en direction d'autres ressources présentes sur le réseau
          Internet ne sauraient engager la responsabilité de Laureen PICHON.
        </p>
        <p className="pt-6 text-justify">
          Tout contenu téléchargé se fait aux risques et périls de l'utilisateur
          et sous sa seule responsabilité. En conséquence, Laureen PICHON ne
          saurait être tenu responsable d'un quelconque dommage subi par
          l'ordinateur de l'utilisateur ou d'une quelconque perte de données
          consécutives au téléchargement.
        </p>
        <h2 className="pt-12 pb-4">
          8 - Droit applicable et attribution de juridiction
        </h2>
        <p className="pt-6 text-justify">
          Les présentes conditions du site{" "}
          <Link href="https://lilousnow.fr">lilousnow.fr</Link> sont régies par
          les lois françaises et toute contestation ou litiges qui pourraient
          naître de l'interprétation ou de l'exécution de celles-ci seront de la
          compétence exclusive des tribunaux dont dépend le siège social de la
          société Laureen PICHON. La langue de référence, pour le règlement de
          contentieux éventuels, est le français.
        </p>
        <h2 className="pt-12 pb-4">9 - Les principales lois concernées</h2>
        <p className="pt-6 text-justify">
          Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°
          2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux
          libertés.
        </p>
        <p className="pt-6 text-justify">
          Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie
          numérique.
        </p>
        <h2 className="pt-12 pb-4">10 - Lexique</h2>
        <p className="pt-6 text-justify">
          Propriétaire du site : Responsable légal des informations contenues
          dans le site internet
        </p>
        <p className="pt-6 text-justify">
          Webmaster : Personne en charge du maintien technique et des mises à
          jour techniques du site internet
        </p>
        <p className="pt-6 text-justify">
          Responsable publication : Personne en charge de la mise à jour des
          contenus (textes, visuels, multimédia, etc.) sur le site internet
        </p>
        <p className="pt-6 text-justify">
          Hébergeur : Espace de stockage du site internet
        </p>
        <p className="pt-6 text-justify">
          Utilisateur : Internaute se connectant, utilisant le site susnommé.
        </p>
        <p className="pt-6 text-justify">
          Informations personnelles : « les informations qui permettent, sous
          quelque forme que ce soit, directement ou non, l’identification des
          personnes physiques auxquelles elles s’appliquent » (article 4 de la
          loi n° 78-17 du 6 janvier 1978).
        </p>
      </div>
    </section>
  );
};

export default SectionDeux;
