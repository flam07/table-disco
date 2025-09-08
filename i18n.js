/**
 * Système d'internationalisation pour Tables Disco
 * 
 * Ce fichier contient le système de traduction automatique pour l'application
 * Tables Disco, permettant une détection automatique de la langue du système
 * (français/anglais) et l'adaptation de l'interface en conséquence.
 */

// Dictionnaire de traductions FR/EN
const translations = {
  // Textes de l'écran d'accueil
  "welcome_title": {
    "fr": "Danseuse ou Danseur, bienvenue !",
    "en": "Dancer, welcome!"
  },
  "welcome_text_1": {
    "fr": "7 niveaux t'attendent. Si tu arrives à les franchir un par un, tu découvriras le mot de passe secret.",
    "en": "7 levels await you. If you manage to clear them one by one, you'll discover the secret password."
  },
  "welcome_text_2": {
    "fr": "Donne-le à ton prof ou à tes parents… et tu gagneras un privilège !",
    "en": "Give it to your teacher or parents... and you'll earn a privilege!"
  },
  "welcome_text_3": {
    "fr": "Mais souviens-toi : le vrai secret, c'est toi.",
    "en": "But remember: the real secret is you."
  },
  "welcome_text_4": {
    "fr": "Cette appli peut t'aider… mais c'est ton groove et ta persévérance qui feront la différence.",
    "en": "This app can help you... but it's your groove and perseverance that will make the difference."
  },
  "welcome_text_5": {
    "fr": "Révise aussi les tables par toi-même, et utilise les stratégies que tu découvriras ici pour progresser.",
    "en": "Also practice the tables by yourself, and use the strategies you'll discover here to progress."
  },
  "welcome_text_6": {
    "fr": "Et quand tu auras tout terminé, demande à tes parents un code spécial pour défier tes copains en changeant le mot de passe de fin.",
    "en": "And when you've finished everything, ask your parents for a special code to challenge your friends by changing the final password."
  },
  "welcome_text_7": {
    "fr": "Si tu es prêt·e… touche le pouce !",
    "en": "If you're ready... touch the thumb!"
  },
  
  // Textes de l'interface principale
  "app_title": {
    "fr": "Disco Tables de Multiplication",
    "en": "Disco Multiplication Tables"
  },
  "level": {
    "fr": "Niveau",
    "en": "Level"
  },
  "last_level": {
    "fr": "Dernier groove",
    "en": "Last groove"
  },
  "score": {
    "fr": "Score",
    "en": "Score"
  },
  "errors": {
    "fr": "Erreurs",
    "en": "Errors"
  },
  "ready_message": {
    "fr": "Prêt à danser avec les tables !",
    "en": "Ready to dance with the tables!"
  },
  "answer_placeholder": {
    "fr": "Réponse",
    "en": "Answer"
  },
  "validate_btn": {
    "fr": "Valider",
    "en": "Submit"
  },
  
  // Textes des niveaux
  "level_1_name": {
    "fr": "Tables carrées Disco",
    "en": "Disco Square Tables"
  },
  "level_2_name": {
    "fr": "Tables de 2 et de 4 - Funk",
    "en": "Tables of 2 and 4 - Funk"
  },
  "level_3_name": {
    "fr": "Tables de 4 et de 8 - Soul",
    "en": "Tables of 4 and 8 - Soul"
  },
  "level_4_name": {
    "fr": "Tables de 5 et de 10 - Boogie",
    "en": "Tables of 5 and 10 - Boogie"
  },
  "level_5_name": {
    "fr": "Tables de 3 et de 6 - Groove",
    "en": "Tables of 3 and 6 - Groove"
  },
  "level_6_name": {
    "fr": "Table de 7 - Hustle",
    "en": "Table of 7 - Hustle"
  },
  "level_7_name": {
    "fr": "Table de 9 - Disco Fever",
    "en": "Table of 9 - Disco Fever"
  },
  
  // Textes des modales
  "game_over_title": {
    "fr": "Game Over",
    "en": "Game Over"
  },
  "game_over_text": {
    "fr": "Oops! La musique s'arrête! Revois bien ces tables :",
    "en": "Oops! The music stopped! Can you find the mistakes in these multiplication tables?"
  },
  "help_btn": {
    "fr": "Aide visuelle",
    "en": "Visual Help"
  },
  "help_strategy_btn": {
    "fr": "Aide et stratégies",
    "en": "Help and Strategies"
  },
  "restart_btn": {
    "fr": "Retour sur la piste",
    "en": "Back to the Dance Floor"
  },
  "level_complete_title": {
    "fr": "Niveau terminé !",
    "en": "Level Complete!"
  },
  "level_complete_text": {
    "fr": "Bravo! Tu danses comme un pro sur ces tables!",
    "en": "Bravo! You dance like a pro on these tables!"
  },
  "final_score": {
    "fr": "Score final",
    "en": "Final Score"
  },
  "next_level_btn": {
    "fr": "Groove suivant",
    "en": "Next Groove"
  },
  "win_text": {
    "fr": "Tu es la star de la piste de danse des tables de multiplication!",
    "en": "You are the star of the multiplication tables dance floor!"
  },
  "restart_game_btn": {
    "fr": "Recommencer le show",
    "en": "Restart the Show"
  },
  
  // Textes du mode admin
  "admin_title": {
    "fr": "Mode DJ",
    "en": "DJ Mode"
  },
  "admin_text": {
    "fr": "Modifiez le message de fin du jeu :",
    "en": "Modify the end game message:"
  },
  "admin_placeholder": {
    "fr": "Entrez le nouveau message de fin...",
    "en": "Enter the new end message..."
  },
  "admin_password_placeholder": {
    "fr": "Mot de passe DJ (optionnel)",
    "en": "DJ Password (optional)"
  },
  "admin_save_btn": {
    "fr": "Enregistrer",
    "en": "Save"
  },
  "admin_password_info": {
    "fr": "Laisser le champ du mot de passe vide pour ne pas en définir.",
    "en": "Leave the password field empty to not set one."
  },
  "admin_success": {
    "fr": "Paramètres disco enregistrés avec succès !",
    "en": "Disco settings successfully saved!"
  },
  "admin_password_error": {
    "fr": "Mot de passe incorrect. Pas de backstage pour toi !",
    "en": "Incorrect password. No backstage for you!"
  },
  
  // Textes de l'aide
  "help_title_visual": {
    "fr": "Aide visuelle - Tables carrées",
    "en": "Visual Help - Square Tables"
  },
  "help_title_strategy": {
    "fr": "Aide et stratégies",
    "en": "Help and Strategies"
  },
  "help_tip": {
    "fr": "Astuce : Chaque table carrée représente un nombre multiplié par lui-même. Le résultat est le nombre total de carrés dans la grille.",
    "en": "Tip: Each square table represents a number multiplied by itself. The result is the total number of squares in the grid."
  },
  "close_help_btn": {
    "fr": "Retour au jeu",
    "en": "Back to Game"
  },
  
  // Textes des stratégies d'aide
  "strategy_1": {
    "fr": `
      <p>💪 Ne lâche rien si tu veux obtenir le code de fin et gagner un privilège !</p>
      <p>👉 Sois stratégique ! Le cerveau mémorise plus efficacement en faisant des liens : les neurones aiment relier les informations.<br>
      Il est plus difficile de mémoriser un produit juste pour ce produit. Mais en t'appuyant sur d'autres nombres, cela peut t'aider.</p>
      <p>➡️ Par exemple, la table de 4 est le double de la table de 2 :<br>
      • 2 × 3 = 6 → donc 4 × 3 = 12 (le double !)<br>
      • 2 × 8 = 16 → donc 4 × 8 = 32</p>
      <p>🔥 Accroche-toi !</p>
    `,
    "en": `
      <p>💪 Don't give up if you want to get the end code and earn a privilege!</p>
      <p>👉 Be strategic! The brain memorizes more effectively by making connections: neurons like to link information.<br>
      It's harder to memorize a product just for that product. But using other numbers as reference can help you.</p>
      <p>➡️ For example, the 4 times table is double the 2 times table:<br>
      • 2 × 3 = 6 → so 4 × 3 = 12 (double!)<br>
      • 2 × 8 = 16 → so 4 × 8 = 32</p>
      <p>🔥 Hang in there!</p>
    `
  },
  "strategy_2": {
    "fr": `
      <p>💡 Comme pour le niveau précédent, appuie-toi sur les doubles !</p>
      <p>• 4 × 3 = 12 → donc 8 × 3 = 24 (le double !)<br>
      • 4 × 8 = 32 → donc 8 × 8 = 64</p>
    `,
    "en": `
      <p>💡 Like the previous level, rely on doubles!</p>
      <p>• 4 × 3 = 12 → so 8 × 3 = 24 (double!)<br>
      • 4 × 8 = 32 → so 8 × 8 = 64</p>
    `
  },
  "strategy_3": {
    "fr": `
      <p>🧠 Stratégie… Stratégie !</p>
      <p>Comme pour le niveau précédent, appuie-toi sur les doubles :<br>
      • 5 × 3 = 15 → donc 10 × 3 = 30 (le double !)</p>
      <p>👉 Et souviens-toi :<br>
      • Dans la table de 5, tout finit par 5 ou 0.<br>
      • Dans la table de 10, tout finit par 0 !</p>
      <p>🚀 Tu avances bien !</p>
    `,
    "en": `
      <p>🧠 Strategy... Strategy!</p>
      <p>Like the previous level, rely on doubles:<br>
      • 5 × 3 = 15 → so 10 × 3 = 30 (double!)</p>
      <p>👉 And remember:<br>
      • In the 5 times table, everything ends with 5 or 0.<br>
      • In the 10 times table, everything ends with 0!</p>
      <p>🚀 You're making good progress!</p>
    `
  },
  "strategy_4": {
    "fr": `
      <p>💪 Comme précédemment, utilise les doubles :</p>
      <p>• 3 × 3 = 9 → donc 6 × 3 = 18 (le double !)<br>
      • 3 × 8 = 24 → donc 6 × 8 = 48</p>
      <p>🎯 Astuce : La table de 6 rime avec les nombres pairs !<br>
      Regarde :<br>
      • 6 × 2 = 12<br>
      • 6 × 4 = 24<br>
      • 6 × 6 = 36<br>
      • 6 × 8 = 48</p>
      <p>🚀 Tu es sur la bonne voie !</p>
    `,
    "en": `
      <p>💪 As before, use doubles:</p>
      <p>• 3 × 3 = 9 → so 6 × 3 = 18 (double!)<br>
      • 3 × 8 = 24 → so 6 × 8 = 48</p>
      <p>🎯 Tip: The 6 times table rhymes with even numbers!<br>
      Look:<br>
      • 6 × 2 = 12<br>
      • 6 × 4 = 24<br>
      • 6 × 6 = 36<br>
      • 6 × 8 = 48</p>
      <p>🚀 You're on the right track!</p>
    `
  },
  "strategy_5": {
    "fr": `
      <p>✨ Tu connais déjà pas mal la table de 7 car tu l'as déjà vue dans les autres tables. N'hésite pas à inverser les nombres si cela peut t'aider :</p>
      <p>• 7 × 4 c'est 4 × 7 = 28<br>
      • 7 × 6 c'est 6 × 7 = 42</p>
      <p>💡 Astuce pour 7 × 9 :<br>
      Imagine que le 9 saute sur le 7 comme un plongeoir. Il tombe sur la tête… aïe ! 😆 Et là, il se fait une bosse en forme de 3 sur le 6!</p>
      <p>➡️ 7 × 9 = 63</p>
      <p>💡 Astuce pour 7 × 8 :<br>
      Inverse la table : 5 - 6 - 7 - 8 ➡️  56 = 7 × 8 </p>
      <p>➡️🔥 7 × 8 = 56</p>
      <p>🏆 Allez, courage ! Il ne te reste qu'un seul niveau après !</p>
    `,
    "en": `
      <p>✨ You already know the 7 times table pretty well because you've seen it in other tables. Don't hesitate to reverse the numbers if it helps you:</p>
      <p>• 7 × 4 is 4 × 7 = 28<br>
      • 7 × 6 is 6 × 7 = 42</p>
      <p>💡 Tip for 7 × 9:<br>
      Imagine the 9 jumping on the 7 like a diving board. It falls on its head... ouch! 😆 And there, it gets a bump shaped like 3 on the 6!</p>
      <p>➡️ 7 × 9 = 63</p>
      <p>💡 Tip for 7 × 8:<br>
      Reverse the table: 5 - 6 - 7 - 8 ➡️  56 = 7 × 8 </p>
      <p>➡️🔥 7 × 8 = 56</p>
      <p>🏆 Come on, courage! You only have one level left!</p>
    `
  },
  "strategy_6": {
    "fr": `
      <p>🌟 Tu connais cette table car tu l'as déjà vue dans les niveaux précédents. Mais si cela peut t'aider, souviens-toi que c'est une table miroir !</p>
      <p>👉 Regarde, les chiffres sont inversés 😉 :</p>
      <p>• 9 × 1 = 09 → 9 × 10 = 90<br>
      • 9 × 2 = 18 → 9 × 9 = 81<br>
      • 9 × 3 = 27 → 9 × 8 = 72<br>
      • 9 × 4 = 36 → 9 × 7 = 63<br>
      • 9 × 5 = 45 → 9 × 6 = 54</p>
      <p>🥳 Dernier niveau ! Tu es presque au bout ! Tu es sur le point d'obtenir ton code pour décrocher ton privilège !</p>
    `,
    "en": `
      <p>🌟 You know this table because you've already seen it in previous levels. But if it helps, remember that it's a mirror table!</p>
      <p>👉 Look, the digits are reversed 😉:</p>
      <p>• 9 × 1 = 09 → 9 × 10 = 90<br>
      • 9 × 2 = 18 → 9 × 9 = 81<br>
      • 9 × 3 = 27 → 9 × 8 = 72<br>
      • 9 × 4 = 36 → 9 × 7 = 63<br>
      • 9 × 5 = 45 → 9 × 6 = 54</p>
      <p>🥳 Last level! You're almost there! You're about to get your code to earn your privilege!</p>
    `
  },
  
  // Textes du chronomètre
  "time_total": {
    "fr": "⏱️ Temps total pour finir le jeu :",
    "en": "⏱️ Total time to finish the game:"
  },
  "time_min": {
    "fr": "min",
    "en": "min"
  },
  "time_sec": {
    "fr": "sec",
    "en": "sec"
  },
  
  // Messages d'alerte
  "alert_settings_saved": {
    "fr": "Paramètres disco enregistrés avec succès !",
    "en": "Disco settings successfully saved!"
  },
  "alert_password_prompt": {
    "fr": "Entrez le mot de passe DJ :",
    "en": "Enter the DJ password:"
  }
};

/**
 * Détecte la langue du système et retourne le code de langue (fr ou en)
 * @returns {string} Code de langue ('fr' ou 'en')
 */
function detectLanguage() {
  // Utiliser navigator.language pour les navigateurs web standards
  // ou cordova.globalization si disponible (pour les applications Cordova)
  let lang = 'fr'; // Langue par défaut
  
  try {
    // Vérifier si nous sommes dans un environnement Cordova
    if (window.cordova && navigator.globalization) {
      // Utiliser l'API Cordova Globalization
      navigator.globalization.getPreferredLanguage(
        function(language) {
          lang = language.value.substring(0, 2).toLowerCase();
          // Si la langue n'est pas supportée, utiliser l'anglais par défaut
          if (lang !== 'fr') {
            lang = 'en';
          }
          // Appliquer les traductions immédiatement
          applyTranslations(lang);
        },
        function() {
          // En cas d'erreur, utiliser la détection basée sur navigator.language
          detectBrowserLanguage();
        }
      );
    } else {
      // Environnement navigateur standard
      detectBrowserLanguage();
    }
  } catch (e) {
    console.error("Erreur lors de la détection de la langue:", e);
    // En cas d'erreur, utiliser la langue par défaut
    return lang;
  }
  
  function detectBrowserLanguage() {
    if (navigator.language) {
      const browserLang = navigator.language.substring(0, 2).toLowerCase();
      // Si la langue n'est pas supportée, utiliser l'anglais par défaut
      if (browserLang !== 'fr') {
        lang = 'en';
      } else {
        lang = 'fr';
      }
      // Appliquer les traductions immédiatement
      applyTranslations(lang);
    }
  }
  
  return lang;
}

/**
 * Obtient la traduction d'une clé dans la langue spécifiée
 * @param {string} key - Clé de traduction
 * @param {string} lang - Code de langue ('fr' ou 'en')
 * @returns {string} Texte traduit
 */
function getTranslation(key, lang) {
  if (translations[key] && translations[key][lang]) {
    return translations[key][lang];
  }
  // Si la traduction n'existe pas, retourner la clé
  console.warn(`Traduction manquante pour la clé: ${key} en ${lang}`);
  return key;
}

/**
 * Applique les traductions à tous les éléments avec l'attribut data-i18n
 * @param {string} lang - Code de langue ('fr' ou 'en')
 */
function applyTranslations(lang) {
  // Stocker la langue actuelle dans le localStorage pour la persistance
  localStorage.setItem('tablesDiscoLanguage', lang);
  
  // Appliquer les traductions aux éléments avec l'attribut data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      // Vérifier le type d'élément pour déterminer comment appliquer la traduction
      if (element.tagName === 'INPUT' && element.type === 'placeholder') {
        element.placeholder = getTranslation(key, lang);
      } else if (element.tagName === 'BUTTON' || element.tagName === 'INPUT') {
        element.value = getTranslation(key, lang);
      } else {
        element.textContent = getTranslation(key, lang);
      }
    }
  });
  
  // Mettre à jour les textes dynamiques qui ne sont pas directement liés à des éléments DOM
  updateDynamicTexts(lang);
}

/**
 * Met à jour les textes dynamiques qui sont générés par le code JavaScript
 * @param {string} lang - Code de langue ('fr' ou 'en')
 */
function updateDynamicTexts(lang) {
  // Mettre à jour les noms des niveaux
 // Mettre à jour les noms des niveaux
if (window.levels) {
  window.levels[0].name = getTranslation("level_1_name", lang);
  window.levels[1].name = getTranslation("level_2_name", lang);
  window.levels[2].name = getTranslation("level_3_name", lang);
  window.levels[3].name = getTranslation("level_4_name", lang);
  window.levels[4].name = getTranslation("level_5_name", lang);
  window.levels[5].name = getTranslation("level_6_name", lang);
  window.levels[6].name = getTranslation("level_7_name", lang);
}

  
  // Mettre à jour l'affichage du niveau actuel si nécessaire
  updateLevelDisplay(lang);
  
  // Mettre à jour les textes des scores et erreurs
  updateScoreAndErrorsDisplay(lang);
}

/**
 * Met à jour l'affichage du niveau actuel
 * @param {string} lang - Code de langue ('fr' ou 'en')
 */
function updateLevelDisplay(lang) {
  const levelDisplay = document.getElementById('level-display');
  if (levelDisplay && window.currentLevelIndex !== undefined && window.levels) {
    const currentLevel = window.levels[window.currentLevelIndex];
    levelDisplay.textContent = (window.currentLevelIndex === window.levels.length - 1)
      ? `${getTranslation("last_level", lang)} - ${currentLevel.name}`
      : `${getTranslation("level", lang)} ${window.currentLevelIndex + 1} - ${currentLevel.name}`;
  }
}

/**
 * Met à jour l'affichage du score et des erreurs
 * @param {string} lang - Code de langue ('fr' ou 'en')
 */
function updateScoreAndErrorsDisplay(lang) {
  const scoreDisplay = document.getElementById('score-display');
  const errorDisplay = document.getElementById('error-display');
  
  if (scoreDisplay && window.score !== undefined) {
    scoreDisplay.textContent = `${getTranslation("score", lang)} : ${window.score}`;
  }
  
  if (errorDisplay && window.errors !== undefined) {
    errorDisplay.textContent = `${getTranslation("errors", lang)} : ${window.errors} / 5`;
  }
}

/**
 * Initialise le système d'internationalisation
 */
function initI18n() {
  // Vérifier si une langue a déjà été enregistrée
  const savedLang = localStorage.getItem('tablesDiscoLanguage');
  
  // Si une langue est déjà enregistrée, l'utiliser
  // Sinon, détecter la langue du système
  const lang = savedLang || detectLanguage();
  
  // Ajouter les attributs data-i18n aux éléments HTML
  setupI18nAttributes();
  
  // Appliquer les traductions
  applyTranslations(lang);
  
  // Remplacer les fonctions d'alerte et de confirmation pour les internationaliser
  setupAlertOverrides(lang);
}

/**
 * Ajoute les attributs data-i18n aux éléments HTML
 */
function setupI18nAttributes() {
  // Écran d'accueil
  const welcomeTitle = document.querySelector('.welcome-text h1');
  if (welcomeTitle) welcomeTitle.setAttribute('data-i18n', 'welcome_title');
  
  // Paragraphes de l'écran d'accueil
  const welcomeParagraphs = document.querySelectorAll('.welcome-text p');
  if (welcomeParagraphs.length >= 7) {
    welcomeParagraphs[0].setAttribute('data-i18n', 'welcome_text_1');
    welcomeParagraphs[1].setAttribute('data-i18n', 'welcome_text_2');
    welcomeParagraphs[2].setAttribute('data-i18n', 'welcome_text_3');
    welcomeParagraphs[3].setAttribute('data-i18n', 'welcome_text_4');
    welcomeParagraphs[4].setAttribute('data-i18n', 'welcome_text_5');
    welcomeParagraphs[5].setAttribute('data-i18n', 'welcome_text_6');
    welcomeParagraphs[6].setAttribute('data-i18n', 'welcome_text_7');
  }
  
  // Interface principale
  const appTitle = document.querySelector('.header h1');
  if (appTitle) appTitle.setAttribute('data-i18n', 'app_title');
  
  // Éléments d'interface
  const answerInput = document.getElementById('answer-input');
  if (answerInput) answerInput.setAttribute('data-i18n', 'answer_placeholder');
  
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) submitBtn.setAttribute('data-i18n', 'validate_btn');
  
  // Modales
  const gameOverTitle = document.querySelector('#game-over-modal h2');
  if (gameOverTitle) gameOverTitle.setAttribute('data-i18n', 'game_over_title');
  
  const gameOverText = document.querySelector('#game-over-modal p');
  if (gameOverText) gameOverText.setAttribute('data-i18n', 'game_over_text');
  
  const helpBtn = document.getElementById('help-btn');
  if (helpBtn) helpBtn.setAttribute('data-i18n', 'help_btn');
  
  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) restartBtn.setAttribute('data-i18n', 'restart_btn');
  
  const levelCompleteTitle = document.querySelector('#level-complete-modal h2');
  if (levelCompleteTitle) levelCompleteTitle.setAttribute('data-i18n', 'level_complete_title');
  
  const levelCompleteText = document.querySelector('#level-complete-modal p');
  if (levelCompleteText) levelCompleteText.setAttribute('data-i18n', 'level_complete_text');
  
  const nextLevelBtn = document.getElementById('next-level-btn');
  if (nextLevelBtn) nextLevelBtn.setAttribute('data-i18n', 'next_level_btn');
  
  const winText = document.querySelector('#game-win-modal p');
  if (winText) winText.setAttribute('data-i18n', 'win_text');
  
  const restartGameBtn = document.getElementById('restart-game-btn');
  if (restartGameBtn) restartGameBtn.setAttribute('data-i18n', 'restart_game_btn');
  
  // Mode admin
  const adminTitle = document.querySelector('#admin-modal h2');
  if (adminTitle) adminTitle.setAttribute('data-i18n', 'admin_title');
  
  const adminText = document.querySelector('#admin-modal p');
  if (adminText) adminText.setAttribute('data-i18n', 'admin_text');
  
  const adminPasswordInput = document.getElementById('admin-password');
  if (adminPasswordInput) adminPasswordInput.setAttribute('data-i18n', 'admin_password_placeholder');
  
  const saveMessageBtn = document.getElementById('save-message-btn');
  if (saveMessageBtn) saveMessageBtn.setAttribute('data-i18n', 'admin_save_btn');
  
  const adminPasswordInfo = document.querySelector('#admin-modal small');
  if (adminPasswordInfo) adminPasswordInfo.setAttribute('data-i18n', 'admin_password_info');
  
  // Aide
  const helpTitle = document.getElementById('help-title');
  if (helpTitle) helpTitle.setAttribute('data-i18n', 'help_title_visual');
  
  const helpTip = document.querySelector('.help-tip');
  if (helpTip) helpTip.setAttribute('data-i18n', 'help_tip');
  
  const closeHelpBtn = document.getElementById('close-help-btn');
  if (closeHelpBtn) closeHelpBtn.setAttribute('data-i18n', 'close_help_btn');
}

/**
 * Remplace les fonctions d'alerte et de confirmation pour les internationaliser
 * @param {string} lang - Code de langue ('fr' ou 'en')
 */
function setupAlertOverrides(lang) {
  // Sauvegarder les fonctions originales
  const originalAlert = window.alert;
  const originalPrompt = window.prompt;
  
  // Remplacer la fonction alert
  window.alert = function(message) {
    // Traduire les messages d'alerte connus
    if (message === "Paramètres disco enregistrés avec succès !") {
      message = getTranslation("alert_settings_saved", lang);
    }
    // Appeler la fonction originale avec le message traduit
    return originalAlert(message);
  };
  
  // Remplacer la fonction prompt
  window.prompt = function(message, defaultValue) {
    // Traduire les messages de prompt connus
    if (message === "Entrez le mot de passe DJ :") {
      message = getTranslation("alert_password_prompt", lang);
    }
    // Appeler la fonction originale avec le message traduit
    return originalPrompt(message, defaultValue);
  };
}

// Initialiser le système d'internationalisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  initI18n();
});

// Pour les applications Cordova, initialiser également lors de l'événement deviceready
document.addEventListener('deviceready', function() {
  initI18n();
}, false);

// Exporter les fonctions pour une utilisation externe
window.i18n = {
  detectLanguage,
  getTranslation,
  applyTranslations,
  updateDynamicTexts
};
