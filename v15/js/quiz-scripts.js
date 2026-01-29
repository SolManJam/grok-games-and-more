/**
 * Presidential Quiz - JavaScript
 * Chat 13 - quiz-v5c-27
 * 
 * CHANGES v5c-27:
 * - Start screen: Signature font now same brown color as quote (#8b4513)
 * - Start screen: "Test your knowledge" line bigger (14px)
 * - Start screen: Tighter line spacing between test line and bullet points
 * - Gameplay: Baseballs bigger (18px), more spread out (12px gap), lower (4px margin)
 * - Gameplay: Bases diamond bigger (55x55px with 14px bases), lower (5px margin)
 * - Gameplay: More gap between score/outs and bases (20px)
 * - Status bar elements now span similar width to presidential card
 * 
 * CHANGES v5c-26:
 * - Quote author now shows full president name (e.g., "Thomas Jefferson")
 * - Quote author uses signature-style cursive font (Dancing Script)
 * - Outs display (baseballs) now centered horizontally under scoreboard
 * 
 * CHANGES v5c-25:
 * - Added animated American flags flanking "Presidential Quiz" title
 *   - Flags wave with CSS animation (rotate -5deg to +5deg)
 *   - Right flag has 0.5s delay for natural look
 * - Added bullet points under "Test your knowledge":
 *   - Number ORDER of POTUS
 *   - Term Years
 *   - ...and more!
 * - Greeting section now larger and more balanced with SP section
 * 
 * CHANGES v5c-24:
 * - Greeting area now includes POTUS quote at bottom (more content)
 * - "Starting Pitchers" header now underlined and centered like lineup cards
 * - VS positioned to align vertically with center of head circles
 * - Reduced empty space in SP card
 * 
 * CHANGES v5c-23:
 * - Merged splash screen into lineup screen
 *   - Greeting text now appears in center column above SP card
 *   - No more separate splash screen
 *   - Game starts directly on lineup screen
 * - Center column layout:
 *   - Top: Greeting card (aligned with top of lineup cards)
 *   - Bottom: SP card (aligned with bottom of lineup cards)
 * - Main menu button now returns to lineup screen (not splash)
 * 
 * CHANGES v5c-22:
 * - Fixed card size mismatch by using same ☰ character for both teams
 *   - Opponent side uses ☰ with color: transparent (invisible but same size)
 *   - Home side uses ☰ with normal color (visible)
 *   - Both now render at identical sizes
 * 
 * CHANGES v5c-21:
 * - Both lineup cards now use identical draggable list structure
 *   - Opponent side uses same HTML structure but with disabled styling
 *   - Hidden drag handle placeholder maintains identical spacing
 * - User can reorder their lineup before AND after picking pitcher
 * - Cards are now perfectly symmetrical in size
 * 
 * CHANGES v5c-20:
 * - Removed opponent team quote for cleaner layout
 * - Moved "Choose Starting Pitcher" button to SP card in center
 * - Moved "Start Game" button to SP card in center  
 * - Removed "Choose your pitcher →" note (button is self-explanatory)
 * - Both lineup cards now just contain the lineup (symmetrical)
 * 
 * CHANGES v5c-19:
 * - FIX: Starting Pitchers card now horizontal layout
 *   - Opponent pitcher on left (near their lineup card)
 *   - VS in the center
 *   - Home pitcher on right (near our lineup card)
 *   - Card widened to 260px to accommodate side-by-side layout
 * - FIX: Removed "Drag to reorder" instruction text
 *   - Was causing height difference between before/after states
 *   - Drag handles (☰) are self-explanatory
 * - FIX: Cards stay same height before and after pitcher selection
 * 
 * CHANGES v5c-18:
 * - FIX: Lineup cards now symmetrical
 *   - Both cards same width (240px) instead of 220px vs 250px
 *   - Regular list items styled to match draggable items (same padding, background, etc.)
 *   - Draggable items adjusted to match (32px height, 2px margin, 4px radius)
 * - FIX: Starting Pitchers card vertically centered
 *   - Added align-items: center to .lineup-cards container
 *   - SP card now sits in vertical center between the two lineup cards
 * 
 * CHANGES v5c-17:
 * - FIX: Added 12px margin-top to .recap-action-btn
 *   - Creates consistent spacing between content and buttons
 *   - Both buttons now have equal spacing above and below
 * 
 * CHANGES v5c-16:
 * - FIX: Button alignment - removed conflicting CSS margins
 *   - Old .up-next had margin: 15px 0 10px 0 (extra top margin!)
 *   - Old #next-inning-btn had margin-top: 10px
 *   - These old styles were overriding the .recap-action-btn styles
 *   - Removed margins from old styles, letting .recap-action-btn control spacing
 * 
 * CHANGES v5c-15:
 * - FIX: Button alignment - changed "Next Up" from <div> to <button>
 *   - Both elements are now <button> tags with identical box-model behavior
 *   - Added disabled attribute to prevent clicking (it's info-only)
 *   - Added opacity:1 override so disabled state doesn't dim it
 *   - Buttons and divs render differently; using same element type fixes alignment
 * 
 * CHANGES v5c-14:
 * - FIX: End-of-inning buttons now properly aligned at bottom
 *   - Columns use align-items: stretch (equal height)
 *   - Middle sections (.top-recap, .bottom-recap) have flex: 1 to fill space
 *   - Buttons use margin-top: auto to anchor at bottom
 *   - Result: buttons at same Y position with equal bottom spacing
 * 
 * CHANGES v5c-13:
 * - FIX: End-of-inning buttons now properly aligned at same Y position
 *   - Changed from align-items: stretch to align-items: flex-end
 *   - Columns align at their bottoms, so buttons are at same height
 *   - Both buttons have consistent margin-top: 10px (not auto)
 *   - Removed flex:1 from recap sections that was causing uneven heights
 * 
 * CHANGES v5c-12:
 * - FIX: End-of-inning button vertical alignment
 *   - Both columns now use align-items: stretch to ensure equal heights
 *   - Top-recap and bottom-recap both have flex:1 to fill space equally
 *   - Buttons at bottom of each column now align horizontally
 * 
 * CHANGES v5c-11:
 * - FIX: Drag-and-drop now works for multiple reorders
 *   - Handlers are properly re-attached after each reorder
 *   - Used cloneNode to prevent duplicate event listeners
 * - FIX: Draggable items now wider and contain text better
 *   - Home lineup card is 250px wide (was 220px)
 *   - Items have more padding and proper text overflow handling
 * - NEW: Pitcher selection shows names on two lines
 *   - First name (smaller, lighter) on top
 *   - Last name (larger, bold) below
 *   - All entries now uniform height and layout
 *   - Stats grouped into blocks: Name | ERA+Quality | Stars+Stamina
 * 
 * CHANGES v5c-10:
 * - NEW: ERA displayed on pitcher selection screen
 *   - Shows ERA alongside quality rating, stars, and pitch estimate
 * - NEW: After selecting pitcher, returns to lineup screen
 *   - Starting Pitchers card now shows our selected pitcher (not TBD)
 *   - "Start Game" button appears to begin the game
 * - NEW: Drag-and-drop batting order adjustment
 *   - Touch-friendly drag handles on home team lineup
 *   - Smooth animations when reordering
 *   - Visual feedback during drag (item lifts, placeholder shows drop zone)
 *   - Updates usaLineup array when dropped
 * 
 * CHANGES v5c-9:
 * - NEW: Starting Pitchers Preview on lineup screen
 *   - Shows head images (circular portraits with baseball caps)
 *   - Displays ERA based on pitcher strength
 *   - Elite pitchers (stamina 115+) have ERA in low 2s
 *   - Good pitchers (stamina 95-114) have ERA in 2.50-3.00
 *   - Average pitchers have ERA 3.00-4.00
 *   - Poor pitchers have ERA 4.00+
 * - NEW: ERA System
 *   - Static initial ERA in pitcher-stats.json (recommended) or calculated from stamina
 *   - ERA updates at end of game based on earned runs allowed
 * - FIX: End-game screen now landscape with two-column layout
 *   - Boxscore uses same RTL scroll trick as end-of-inning
 *   - Handles 20+ innings gracefully
 * - FIX: Batting averages now update after EACH at-bat (not just at end)
 * - NEW: BA displayed in "Next Up" section of end-of-inning screen
 * - NEW: Earned Runs (ER) tracked per pitcher
 *   - Shows in Top/Bottom summaries on end-of-inning screen
 *   - ER is cumulative for the game, not just the inning
 *   - ERA displayed alongside ER
 * - FIX: End-of-inning button alignment
 *   - "Up Next" and "Start X Inning" buttons now same height
 *   - Equal spacing from bottom edge
 *   - Symmetric appearance
 * 
 * CHANGES v5c-8:
 * - FIX: Batting Averages now correlate CORRECTLY with difficulty
 *   - PREVIOUS BUG: BA was INVERTED - famous presidents had HIGH BA (wrong!)
 *   - NOW CORRECT: Famous presidents (easy questions) = LOW BA (easy to pitch to)
 *   - Obscure presidents (hard questions) = HIGH BA (tough batters)
 * - NEW: Static initial BA loaded from batter-stats.json
 *   - Each president has pre-defined seasonHits, seasonAB, targetBA
 *   - Provides consistent starting stats across game sessions
 *   - Anchored with 50-100 ABs so individual games don't skew averages wildly
 * - Fallback calculation uses CORRECT formula if JSON unavailable:
 *   - baseBA = 0.180 + (difficulty - 1) * 0.04
 *   - Difficulty 1 (famous) → BA ~.180
 *   - Difficulty 5 (obscure) → BA ~.340
 * 
 * CHANGES v5c-7:
 * - FIX: Walk-off animation no longer crashes
 *   - showNextPlay() now handles isWalkOff entries as special case
 *   - Added null check for play.result before calling .includes()
 *   - Walk-off message displays with special styling and animation
 * 
 * CHANGES v5c-6:
 * - FIX: Cleveland predecessor/successor questions now show both answers as one option
 *   - Predecessor: "C.A. Arthur & B. Harrison"
 *   - Successor: "B. Harrison & W. McKinley"
 *   - Wrong answers are also pairs of presidents for consistency
 * - FIX: Walk-off wins now stop simulation immediately
 *   - Home team stops batting as soon as they take the lead in 9th inning or later
 *   - Added "WALK-OFF WIN!" message to play-by-play
 *   - LOB not counted for walk-off wins (game ended mid-inning)
 * - SYNTAX: "combine for" → "combines for" (team names are singular)
 * - SYNTAX: "warming..." → "warming up" (clearer message)
 * - Reduced verbose console.log statements for bullpen/warmup
 * 
 * CHANGES v5c-5:
 * - FIX: Reliever decision buttons no longer trigger hint overlay's click handler
 *   - Added e.stopPropagation() to Yes/No button click handlers
 *   - Added reliever-mode check in hintHandler to prevent accidental triggering
 *   - This was causing finishAtBat() and pickNextPresident() to fire, skipping batters
 * - FIX: Relief pitcher now properly starts at P: 0
 *   - The phantom pitches were coming from the unintended finishAtBat() call
 * 
 * CHANGES v5c-4:
 * - FIX: Batter no longer skipped when using reliever decision prompt
 *   - Added pendingBatter/pendingBatterIndex variables to store peeked batter
 *   - New loadPendingBatter() function uses stored batter instead of calling getNextBatter()
 *   - Lineup position only advances in loadPendingBatter() after decision
 * - FIX: Relief pitcher now starts at P: 0 (not P: 1)
 *   - switchPitcher() now has skipOptionRegen parameter
 *   - bringInWarmedUpReliever() passes skipOptionRegen=true during decision flow
 *   - Option regeneration happens in loadPendingBatter() instead
 * - FIX: "No" button now shows question for the previewed batter (not skip to next)
 *   - handleRelieverNo() calls loadPendingBatter() instead of loadNextBatter()
 * 
 * CHANGES v5c-3:
 * - FIX: Reliever decision prompt no longer shows "CORRECT ANSWER:" and "CLUE:" labels
 *   - Labels are hidden via JS when showing reliever prompt
 *   - Restored when overlay is dismissed
 * - FIX: Batter no longer skipped when bringing in reliever
 *   - Now PEEKS at next batter without advancing lineup position
 *   - Lineup only advances in loadNextBatter() AFTER user decides
 * - FIX: Relief pitcher no longer gets phantom pitches
 *   - No pitch counting occurs during decision prompt
 *   - Pitches only added when actually facing the batter
 * - UI: Reliever prompt layout improved
 *   - Question/prompt displayed above buttons
 *   - Larger text for readability
 * 
 * CHANGES v5c-2:
 * - FIX: LOB no longer wraps in extra innings boxscore
 *   - Line score now uses dynamic grid columns based on innings played
 *   - Wrapped in scrollable container that scrolls to show latest innings (rtl trick)
 * - FIX: Warmup message no longer shifts question
 *   - Increased #pitcher-info-stack min-width to 200px
 *   - Shortened warmup message to just "warming..." (no batter count)
 * - FIX: Warmup auto-completes between innings
 *   - If reliever is warming when inning ends, they're fully warmed for next inning
 * - FIX: Reliever decision prompt BEFORE seeing question
 *   - When reliever is ready, shows "Now up: [batter]" without question
 *   - Uses superbutton overlay to prompt: "[Name] is ready! Put him in? Yes/No"
 *   - Question only loads AFTER user decides (prevents cheating by seeing tough question first)
 * - FIX: Bottom action buttons now consistent height
 *   - Added explicit min-height, max-height, overflow handling
 * - FIX: Batting averages now correlate with difficulty
 *   - Easy presidents (high difficulty) have LOW batting averages
 *   - Hard presidents (low difficulty) have HIGH batting averages
 *   - This fixes the inverted BA issue where #9 hitters had highest BA
 * 
 * CHANGES v5c-1:
 * - FIX: Extra innings walk-off now shows inning recap before final results
 *   - endInning() always calls showInningComplete(), which shows "View Final Results" when game is over
 *   - This ensures the offensive animation plays before showing final results
 * - FIX: FDR successor question now has "H. Truman" as correct answer
 *   - Previously showed "None - Last in dataset" which was confusing
 *   - Both generateSuccessorOptions() and getCorrectAnswer() updated
 * - FIX: Warmup message no longer shifts question position
 *   - Added min-width: 150px to #pitcher-info-stack in CSS
 * - FIX: Bottom inning stats (Runs/Hits/LOB) now all same font size
 *   - Removed font-size: 18px override on #anim-runs
 *   - Now uses .stat-value class (14px) for consistent sizing
 * 
 * CHANGES v4c-7:
 * - FIX: Crash when showing final results (startingPitcherIndex was being used wrong)
 *   - startingPitcherIndex IS the president index, not lineup index
 * - FIX: Inning recap alignment - Up Next now has same gap as Start button
 * 
 * CHANGES v4c-6:
 * - UI: Removed "Xth Inning Recap" title from inning complete screen
 * - UI: Better alignment of Top/Bottom sections and Up Next/Button
 * - UI: Warmup message moved to pitcher area, alternates every 3 seconds
 * - UI: Question area is now clean (no warmup message covering it)
 * - FEAT: Perfect game/no-hitter/shutout messages now include pitcher name
 *   - Single pitcher: "FDR hurls PERFECT GAME!!!"
 *   - Multiple pitchers: "[Team] combines for PERFECT GAME!!!"
 * - FIX: Leaderboard sorting now properly ranks perfect games/no-hitters
 *   - Sorts by: runs → hits → walks (all lower is better)
 * 
 * CHANGES v4c-5:
 * - UI: Status bar layout fixed to match diagram exactly
 *   - Left: [Score/Outs] [Bases] side by side
 *   - Right: [Pitcher info] [Icons] side by side
 * - UI: Inning recap - "Up Next" now same size/style as Continue button (symmetrical)
 * - UI: Button text changed from "Continue to 2nd" to "Start 2nd Inning" (clearer)
 * 
 * CHANGES v4c-4:
 * - UI: Complete status bar redesign based on user diagram
 *   - Left column: Score → Outs → Bases (stacked vertically)
 *   - Center: MUCH BIGGER question (26px, the main focus!)
 *   - Right column: Pitcher name → P: count → buttons (stacked vertically)
 * - UI: Splash screen uses off-white background (not bright white)
 * - UI: Quote author on new line below quote text
 * - NOTE: Master dev plan should specify no bright white backgrounds
 * 
 * CHANGES v4c-3:
 * - UI: Status bar - outs (baseballs) now under score, not floating above question
 * - UI: Bigger bases diamond (50px) beside score+outs stack
 * - UI: Removed "Now pitching:" label - pitcher name next to P: count is self-explanatory
 * - UI: Inning recap - "Up Next" moved to left column (pitching side)
 * 
 * CHANGES v4c-2:
 * - FIX: Warmup message no longer shows after pitcher is brought in
 * - FIX: Warmup message doesn't cover question (smaller, inline)
 * - UI: Redesigned status bar - two rows with pitcher info on right
 * - UI: Bigger question text in dedicated bottom row
 * - UI: Bases and outs grouped together under score
 * - UI: "Now pitching:" with pitcher name next to pitch count
 * - UI: Bigger inning recap screen (900px wide) for landscape
 * - UI: Better two-column layout with more room for boxscore and animation
 * 
 * CHANGES v4c-1:
 * - BUG FIX: Extra "X" in boxscore - X now only shows in inning column when bottom half skipped
 * - BUG FIX: Relief pitcher's 2nd batter always gets correct answer in options
 * - NEW: Bullpen warmup system - RP needs 1-3 batters to warm up
 * - NEW: Pre-batter bullpen decision with "Now up:" display
 * - NEW: Successor question mode added (5-mode rotation)
 * - UI: Inning recap bottom section - pitcher name on own line, added Hits/LOB
 * - UI: Two-column landscape layout for inning recap screen
 * 
 * Question Mode Rotation:
 * - Lap 1: Number
 * - Lap 2: Term Years  
 * - Lap 3: Predecessor
 * - Lap 4: Successor (NEW!)
 * - Lap 5: Home State
 * - Lap 6+: Cycles through all 5
 */

// ============================================================================
// GAME STATE VARIABLES
// ============================================================================
let presidents = [];
let presidentContext = [];
let yearlyAccomplishments = [];
let accomplishmentsByName = {};
let contextByRank = {};

let inning = 1;
let outs = 0;
let totalCorrectFirstTry = 0;
let totalQuestionsAsked = 0;
let currentPresident = null;
let currentMode = 'number';
let currentQuestion = '';
let attempts = 0;
let lastWrongAnswer = null; // Track for adaptive hints

const NUM_CHOICES = 6;
const MAX_WRONG_BEFORE_HR = 4;

let presidentsAskedThisGame = new Set();

// Team names - historical cities important 1789-1945
const TEAM_CITIES = [
    { abbr: 'NY', name: 'New York' },
    { abbr: 'PHI', name: 'Philadelphia' },
    { abbr: 'BOS', name: 'Boston' },
    { abbr: 'WAS', name: 'Washington' },
    { abbr: 'CHI', name: 'Chicago' },
    { abbr: 'BAL', name: 'Baltimore' },
    { abbr: 'STL', name: 'St. Louis' },
    { abbr: 'CLE', name: 'Cleveland' }
];

let homeTeam = null;
let awayTeam = null;

// 9-batter lineups
let oppLineup = [];
let usaLineup = [];
let lineupPosition = 0;
let lineupLapsCompleted = 0;

// ============================================================================
// PITCHER SYSTEM - NEW v3c-2
// ============================================================================
let currentPitcher = null;          // President object from usaLineup
let currentPitcherIndex = null;     // Index in usaLineup
let startingPitcherIndex = null;    // v3c-3: Track starting pitcher to exclude from bullpen
let pitchCount = 0;                 // Total pitches this pitcher
let inningPitchCount = 0;           // Pitches this inning (resets each inning)
let pitchersUsed = [];              // Indices of presidents who have pitched
let fatigueLevel = 'fresh';         // fresh/normal/tired/gassed
let questionStartTime = 0;          // v3c-3: Track when question was shown
let bullpenTooltipVisible = false;  // v3c-3: Track tooltip visibility

// v4c-1: Bullpen warmup system
let warmingUpPitcher = null;        // President object of RP warming up
let warmingUpPitcherIndex = null;   // usaLineup index of warming pitcher
let warmupBattersFaced = 0;         // How many batters faced while warming
let warmupRequired = 0;             // 1-3 batters needed to be fully warm
let isWarmingUp = false;            // Whether someone is currently warming

// v4c-6: Alternating pitcher/warmup display
let pitcherDisplayInterval = null;  // Interval for alternating display
let showingWarmupInfo = false;      // Toggle for alternating display

// v5c-9: ERA and Earned Runs tracking
let pitcherERAStats = {};           // { presidentIndex: { era, earnedRuns, inningsPitched } }
let currentPitcherER = 0;           // Earned runs allowed by current pitcher this game
let currentPitcherIP = 0;           // Innings pitched by current pitcher this game (tracks partial innings)
let staticPitcherStats = null;      // Loaded from pitcher-stats.json for consistent starting ERA

// Fatigue thresholds (percentage of stamina)
const FATIGUE_THRESHOLDS = {
    fresh: 0.50,    // < 50% = fresh
    normal: 0.75,   // 50-75% = normal  
    tired: 0.90,    // 75-90% = tired
    gassed: 1.0     // > 90% = gassed
};

// Pitch count ranges by batter difficulty (lineup position proxy)
// Real MLB average is ~3.9 pitches per PA
const PITCH_RANGES = {
    easy: { min: 1, max: 4 },      // Lineup spots 8-9 (easy batters)
    medium: { min: 2, max: 6 },    // Lineup spots 6-7
    hard: { min: 4, max: 8 },      // Lineup spots 3-5 (tough batters)
    leadoff: { min: 3, max: 7 }    // Lineup spots 1-2
};

// ============================================================================
// BATTING AVERAGES - v3c-4, FIXED v5c-8
// Simulates mid-season stats (19th century had ~60-100 games)
// BA now correlates CORRECTLY with difficulty:
// - Easy questions (famous presidents) = LOW BA (easy to pitch to)
// - Hard questions (obscure presidents) = HIGH BA (tough batters)
// ============================================================================
let playerBattingStats = {}; // { presidentIndex: { hits, atBats, startingHits, startingAB } }
let staticBatterStats = null; // Loaded from batter-stats.json for consistent starting values

// ============================================================================
// OPPONENT PITCHER SYSTEM - NEW v3c-5
// Track opponent's pitcher for offensive simulation
// ============================================================================
let oppPitcher = null;              // Opponent's current pitcher (president object)
let oppPitcherIndex = null;         // Index in oppLineup
let oppPitchCount = 0;              // Opponent pitcher's pitch count
let oppFatigueLevel = 'fresh';      // Opponent pitcher fatigue
let oppPitchersUsed = [];           // Opponent pitchers who have pitched
let homeLineupPosition = 0;         // Track position in our batting lineup
let lastHomeInningResults = [];     // Store play-by-play for display

// ============================================================================
// LOB (Left On Base) TRACKING - NEW v3c-7
// ============================================================================
let awayLOB = 0;                    // Opponent's cumulative LOB (runners they leave on base when we pitch)
let homeLOB = 0;                    // Our cumulative LOB (runners we leave on base when we bat)

// ============================================================================
// Baseball scoring
let inningScores = [];
let currentInningHits = 0;
let currentInningRuns = 0;
let currentInningTB = 0;
let hitsThisInning = {};
let walksThisInning = 0;

// Base runners
let bases = [false, false, false];
let batterPosition = 0;
let runsThisAtBat = 0;

let homeTotalRuns = 0;
let awayTotalRuns = 0;

// Individual batter stats
let currentAtBatStats = {
    hits: 0, atBats: 0, runs: 0, rbi: 0,
    singles: 0, doubles: 0, triples: 0, homeRuns: 0,
    totalBases: 0, strikeouts: 0, walks: 0
};

let timerStart = 0;
let isTransitioning = false;

const OUTS_PER_INNING = 3;
const LINEUP_SIZE = 9;

// DOM Elements
let optionDivs, gameArea, splashScreen, settingsScreen, inningCompleteScreen;
let finalScreen, highScoresModal, scoreSubmission, currentImage, nextImage;
let hintOverlay, messageArea, lineupScreen, pitcherSelectScreen, bullpenModal;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getSuitLetter(suit) {
    if (suit === "democratic") return "D";
    if (suit === "republican") return "R";
    return "O";
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function resetCurrentAtBatStats() {
    currentAtBatStats = {
        hits: 0, atBats: 0, runs: 0, rbi: 0,
        singles: 0, doubles: 0, triples: 0, homeRuns: 0,
        totalBases: 0, strikeouts: 0, walks: 0
    };
    runsThisAtBat = 0;
}

function recordAtBatStats() {
    if (!currentPresident) return;
    
    if (!currentPresident.battingStats) {
        currentPresident.battingStats = {
            hits: 0, atBats: 0, runs: 0, rbi: 0,
            singles: 0, doubles: 0, triples: 0, homeRuns: 0,
            totalBases: 0, strikeouts: 0, walks: 0
        };
    }
    
    const stats = currentPresident.battingStats;
    Object.keys(currentAtBatStats).forEach(key => {
        stats[key] += currentAtBatStats[key];
    });
}

function getShortPresidentName(president) {
    const shortNames = {
        "Washington": "G. Washington", "J. Adams": "J. Adams", "Jefferson": "T. Jefferson",
        "Madison": "J. Madison", "Monroe": "J. Monroe", "J.Q. Adams": "J.Q. Adams",
        "Jackson": "A. Jackson", "Van Buren": "M. Van Buren", "W.H. Harrison": "W.H. Harrison",
        "Tyler": "J. Tyler", "Polk": "J.K. Polk", "Taylor": "Z. Taylor",
        "Fillmore": "M. Fillmore", "Pierce": "F. Pierce", "Buchanan": "J. Buchanan",
        "Lincoln": "A. Lincoln", "Johnson": "A. Johnson", "Grant": "U.S. Grant",
        "Hayes": "R.B. Hayes", "Garfield": "J.A. Garfield", "Arthur": "C.A. Arthur",
        "Cleveland": "G. Cleveland", "B. Harrison": "B. Harrison", "McKinley": "W. McKinley",
        "T. Roosevelt": "T. Roosevelt", "Taft": "W.H. Taft", "Wilson": "W. Wilson",
        "Harding": "W.G. Harding", "Coolidge": "C. Coolidge", "Hoover": "H. Hoover",
        "FDR": "F.D. Roosevelt"
    };
    return shortNames[president.name] || president.name;
}

function getFullPresidentName(president) {
    const fullNames = {
        "Washington": "George Washington", "J. Adams": "John Adams", "Jefferson": "Thomas Jefferson",
        "Madison": "James Madison", "Monroe": "James Monroe", "J.Q. Adams": "John Quincy Adams",
        "Jackson": "Andrew Jackson", "Van Buren": "Martin Van Buren", "W.H. Harrison": "William Henry Harrison",
        "Tyler": "John Tyler", "Polk": "James K. Polk", "Taylor": "Zachary Taylor",
        "Fillmore": "Millard Fillmore", "Pierce": "Franklin Pierce", "Buchanan": "James Buchanan",
        "Lincoln": "Abraham Lincoln", "Johnson": "Andrew Johnson", "Grant": "Ulysses S. Grant",
        "Hayes": "Rutherford B. Hayes", "Garfield": "James A. Garfield", "Arthur": "Chester A. Arthur",
        "Cleveland": "Grover Cleveland", "B. Harrison": "Benjamin Harrison", "McKinley": "William McKinley",
        "T. Roosevelt": "Theodore Roosevelt", "Taft": "William Howard Taft", "Wilson": "Woodrow Wilson",
        "Harding": "Warren G. Harding", "Coolidge": "Calvin Coolidge", "Hoover": "Herbert Hoover",
        "FDR": "Franklin D. Roosevelt"
    };
    return fullNames[president.name] || president.name;
}

/**
 * v5c-11: Get first name and last name as separate lines for pitcher display
 * Returns { firstName: "Abraham", lastName: "Lincoln" }
 */
function getPresidentNameLines(president) {
    const nameMap = {
        "Washington": { firstName: "George", lastName: "Washington" },
        "J. Adams": { firstName: "John", lastName: "Adams" },
        "Jefferson": { firstName: "Thomas", lastName: "Jefferson" },
        "Madison": { firstName: "James", lastName: "Madison" },
        "Monroe": { firstName: "James", lastName: "Monroe" },
        "J.Q. Adams": { firstName: "John Quincy", lastName: "Adams" },
        "Jackson": { firstName: "Andrew", lastName: "Jackson" },
        "Van Buren": { firstName: "Martin", lastName: "Van Buren" },
        "W.H. Harrison": { firstName: "William Henry", lastName: "Harrison" },
        "Tyler": { firstName: "John", lastName: "Tyler" },
        "Polk": { firstName: "James K.", lastName: "Polk" },
        "Taylor": { firstName: "Zachary", lastName: "Taylor" },
        "Fillmore": { firstName: "Millard", lastName: "Fillmore" },
        "Pierce": { firstName: "Franklin", lastName: "Pierce" },
        "Buchanan": { firstName: "James", lastName: "Buchanan" },
        "Lincoln": { firstName: "Abraham", lastName: "Lincoln" },
        "Johnson": { firstName: "Andrew", lastName: "Johnson" },
        "Grant": { firstName: "Ulysses S.", lastName: "Grant" },
        "Hayes": { firstName: "Rutherford B.", lastName: "Hayes" },
        "Garfield": { firstName: "James A.", lastName: "Garfield" },
        "Arthur": { firstName: "Chester A.", lastName: "Arthur" },
        "Cleveland": { firstName: "Grover", lastName: "Cleveland" },
        "B. Harrison": { firstName: "Benjamin", lastName: "Harrison" },
        "McKinley": { firstName: "William", lastName: "McKinley" },
        "T. Roosevelt": { firstName: "Theodore", lastName: "Roosevelt" },
        "Taft": { firstName: "William H.", lastName: "Taft" },
        "Wilson": { firstName: "Woodrow", lastName: "Wilson" },
        "Harding": { firstName: "Warren G.", lastName: "Harding" },
        "Coolidge": { firstName: "Calvin", lastName: "Coolidge" },
        "Hoover": { firstName: "Herbert", lastName: "Hoover" },
        "FDR": { firstName: "Franklin D.", lastName: "Roosevelt" }
    };
    return nameMap[president.name] || { firstName: president.name, lastName: "" };
}

function formatHitType(hit) {
    if (hit.type === 'homerun') {
        if (hit.rbi === 1) return 'solo HR';
        if (hit.rbi === 4) return 'grand slam';
        return `${hit.rbi}-run HR`;
    }
    if (hit.type === 'walk') return 'BB';
    return hit.type;
}

function selectTeams() {
    const shuffled = shuffle([...TEAM_CITIES]);
    awayTeam = shuffled[0];
    homeTeam = shuffled[1];
    console.log(`Teams: ${awayTeam.name} @ ${homeTeam.name}`);
}

// ============================================================================
// BATTING AVERAGE FUNCTIONS - NEW v3c-4
// ============================================================================

/**
 * Initialize batting stats for all players in lineups
 * v5c-8 FIX: BA now correctly correlates with difficulty:
 * - Famous presidents (difficulty 1) = easy questions = easy to pitch to = LOW BA (.180-.220)
 * - Obscure presidents (difficulty 5) = hard questions = tough batters = HIGH BA (.340-.380)
 * 
 * Uses static stats from batter-stats.json for consistency across sessions.
 * Fallback calculation available if JSON not loaded.
 */
function initializeBattingStats() {
    playerBattingStats = {};
    
    // Initialize for all players in both lineups
    [...oppLineup, ...usaLineup].forEach((presIdx, index) => {
        const p = presidents[presIdx];
        const difficulty = p.difficulty || 3; // 1-5 scale
        
        // v5c-8: Use static stats from batter-stats.json if available
        const staticStats = staticBatterStats ? staticBatterStats[p.name] : null;
        
        let startingAB, startingHits, targetBA;
        
        if (staticStats) {
            // Use pre-defined stats from JSON for consistency
            startingAB = staticStats.seasonAB;
            startingHits = staticStats.seasonHits;
            targetBA = staticStats.targetBA;
            console.log(`${p.name}: Using static BA ${targetBA.toFixed(3)} (${startingHits}/${startingAB})`);
        } else {
            // Fallback: Calculate BA that correlates CORRECTLY with difficulty
            // v5c-8 FIX: Higher difficulty (obscure presidents) = HIGHER BA (tougher batters)
            // 
            // Baseball logic: User is the PITCHER
            // - Famous presidents = easy trivia questions = easy to "pitch to" = LOW BA
            // - Obscure presidents = hard trivia questions = tough batters = HIGH BA
            //
            // Difficulty 1 (famous: Washington, Lincoln, FDR) → BA ~.180-.220
            // Difficulty 5 (obscure: Tyler, Fillmore, Pierce) → BA ~.340-.380
            
            const baseBA = 0.180 + (difficulty - 1) * 0.04; // d1=.180, d3=.260, d5=.340
            const variance = (Math.random() - 0.5) * 0.06; // ±0.03 variance
            targetBA = Math.max(0.150, Math.min(0.390, baseBA + variance));
            
            // AB range: top-of-order batters (high difficulty) get more ABs
            // Range: 50-100, with higher difficulty getting more ABs on average
            const abBase = 50 + (difficulty - 1) * 10; // d1=50, d3=70, d5=90
            const abVariance = Math.floor(Math.random() * 15) - 7; // ±7 variance
            startingAB = Math.max(50, Math.min(100, abBase + abVariance));
            startingHits = Math.round(startingAB * targetBA);
            
            console.log(`${p.name} (d${difficulty}): Calculated BA ${targetBA.toFixed(3)} (${startingHits}/${startingAB})`);
        }
        
        playerBattingStats[presIdx] = {
            hits: startingHits,
            atBats: startingAB,
            startingHits: startingHits,
            startingAB: startingAB
        };
    });
}

/**
 * Get batting average for a player
 */
function getBattingAverage(presIdx) {
    const stats = playerBattingStats[presIdx];
    if (!stats || stats.atBats === 0) return '.000';
    const avg = stats.hits / stats.atBats;
    return avg.toFixed(3).substring(1); // Returns ".XXX" format
}

/**
 * Record an at-bat result for batting average
 */
function recordBattingResult(presIdx, gotHit) {
    if (!playerBattingStats[presIdx]) {
        playerBattingStats[presIdx] = { hits: 0, atBats: 0, startingHits: 0, startingAB: 0 };
    }
    playerBattingStats[presIdx].atBats++;
    if (gotHit) {
        playerBattingStats[presIdx].hits++;
    }
}

// ============================================================================
// ERA SYSTEM - NEW v5c-9
// ERA = (Earned Runs / Innings Pitched) * 9
// Elite pitchers (stamina 115+): ERA in low 2s (~2.00-2.50)
// Good pitchers (stamina 95-114): ERA 2.50-3.00
// Average pitchers (stamina 80-94): ERA 3.00-3.75
// Below avg pitchers (stamina 65-79): ERA 3.75-4.50
// Poor pitchers (stamina <65): ERA 4.50+
// ============================================================================

/**
 * Initialize ERA stats for all pitchers in both lineups
 * ERA calculated based on stamina (inverse relationship)
 */
function initializePitcherERAStats() {
    pitcherERAStats = {};
    
    // Initialize for all players in both lineups (any could pitch in relief)
    [...oppLineup, ...usaLineup].forEach((presIdx) => {
        const p = presidents[presIdx];
        const stamina = p.stamina || 85;
        
        // Calculate target ERA based on stamina
        // stamina 120 → ERA ~1.90, stamina 55 → ERA ~5.00
        // Formula: ERA = 7.0 - (stamina / 25) + variance
        let targetERA;
        if (stamina >= 115) {
            // Elite (ACE): ERA 1.80-2.40
            targetERA = 1.80 + Math.random() * 0.60;
        } else if (stamina >= 95) {
            // Good: ERA 2.40-3.20
            targetERA = 2.40 + Math.random() * 0.80;
        } else if (stamina >= 80) {
            // Average: ERA 3.20-4.00
            targetERA = 3.20 + Math.random() * 0.80;
        } else if (stamina >= 65) {
            // Below Avg: ERA 4.00-4.80
            targetERA = 4.00 + Math.random() * 0.80;
        } else {
            // Poor: ERA 4.80-5.80
            targetERA = 4.80 + Math.random() * 1.00;
        }
        
        // Generate innings pitched that give reasonable ERA
        // More IP for starters (higher stamina), less for relievers
        const baseIP = 30 + (stamina - 55) * 1.2; // 30-108 IP range
        const ipVariance = (Math.random() - 0.5) * 20;
        const seasonIP = Math.max(20, Math.min(120, baseIP + ipVariance));
        
        // Calculate earned runs to match target ERA
        // ERA = (ER / IP) * 9 → ER = (ERA * IP) / 9
        const seasonER = Math.round((targetERA * seasonIP) / 9);
        
        pitcherERAStats[presIdx] = {
            era: targetERA,
            earnedRuns: seasonER,
            inningsPitched: seasonIP,
            startingER: seasonER,
            startingIP: seasonIP
        };
        
        console.log(`${p.name}: ERA ${targetERA.toFixed(2)} (${seasonER} ER in ${seasonIP.toFixed(1)} IP)`);
    });
}

/**
 * Get formatted ERA string for a pitcher
 */
function getPitcherERA(presIdx) {
    const stats = pitcherERAStats[presIdx];
    if (!stats || stats.inningsPitched === 0) return '-.--';
    return stats.era.toFixed(2);
}

/**
 * Record earned runs against a pitcher and recalculate ERA
 */
function recordEarnedRuns(presIdx, runs, inningFraction) {
    if (!pitcherERAStats[presIdx]) {
        pitcherERAStats[presIdx] = { era: 4.00, earnedRuns: 0, inningsPitched: 0, startingER: 0, startingIP: 0 };
    }
    pitcherERAStats[presIdx].earnedRuns += runs;
    pitcherERAStats[presIdx].inningsPitched += inningFraction;
    
    // Recalculate ERA
    const stats = pitcherERAStats[presIdx];
    if (stats.inningsPitched > 0) {
        stats.era = (stats.earnedRuns / stats.inningsPitched) * 9;
    }
}

// ============================================================================
// PITCHER SYSTEM FUNCTIONS - NEW v3c-2
// ============================================================================

/**
 * Get pitcher quality description based on stamina
 */
function getPitcherQuality(stamina) {
    if (stamina >= 110) return { label: 'ACE', color: '#4CAF50', stars: '★★★★★' };
    if (stamina >= 95) return { label: 'Good', color: '#8BC34A', stars: '★★★★☆' };
    if (stamina >= 80) return { label: 'Average', color: '#FFC107', stars: '★★★☆☆' };
    if (stamina >= 65) return { label: 'Below Avg', color: '#FF9800', stars: '★★☆☆☆' };
    return { label: 'Poor', color: '#f44336', stars: '★☆☆☆☆' };
}

/**
 * Calculate fatigue level based on pitch count vs stamina
 */
function calculateFatigue() {
    if (!currentPitcher) return 'fresh';
    
    const stamina = currentPitcher.stamina || 85;
    const ratio = pitchCount / stamina;
    
    // Inning pitch count > 20 adds extra fatigue
    const inningFatiguePenalty = inningPitchCount > 20 ? 0.10 : 0;
    const adjustedRatio = ratio + inningFatiguePenalty;
    
    if (adjustedRatio < FATIGUE_THRESHOLDS.fresh) return 'fresh';
    if (adjustedRatio < FATIGUE_THRESHOLDS.normal) return 'normal';
    if (adjustedRatio < FATIGUE_THRESHOLDS.tired) return 'tired';
    return 'gassed';
}

/**
 * Get pitch count for this at-bat based on response time
 * v3c-3: Now time-based instead of random
 * Fast answer (< 3s) = 1-2 pitches
 * Medium (3-8s) = 3-5 pitches  
 * Slow (8-15s) = 5-7 pitches
 * Very slow (>15s) = 7-10 pitches
 */
function getPitchesForAtBat() {
    const responseTime = (Date.now() - questionStartTime) / 1000; // seconds
    
    let minPitches, maxPitches;
    
    if (responseTime < 3) {
        minPitches = 1;
        maxPitches = 2;
    } else if (responseTime < 8) {
        minPitches = 3;
        maxPitches = 5;
    } else if (responseTime < 15) {
        minPitches = 5;
        maxPitches = 7;
    } else {
        minPitches = 7;
        maxPitches = 10;
    }
    
    const pitches = Math.floor(Math.random() * (maxPitches - minPitches + 1)) + minPitches;
    console.log(`Response time: ${responseTime.toFixed(1)}s → ${pitches} pitches`);
    return pitches;
}

/**
 * Add pitches to the count after an at-bat
 */
function addPitchesForAtBat() {
    const pitches = getPitchesForAtBat();
    pitchCount += pitches;
    inningPitchCount += pitches;
    fatigueLevel = calculateFatigue();
    updatePitchDisplay();
    updateBullpenButton();
    console.log(`+${pitches} pitches. Total: ${pitchCount}, Inning: ${inningPitchCount}, Fatigue: ${fatigueLevel}`);
}

/**
 * Check if bullpen should be available
 */
function isBullpenAvailable() {
    // Available if: inning 6+ OR pitcher is tired/gassed
    const inningCheck = inning >= 6;
    const fatigueCheck = fatigueLevel === 'tired' || fatigueLevel === 'gassed';
    const hasRelieverAvailable = getAvailableRelievers().length > 0;
    
    return (inningCheck || fatigueCheck) && hasRelieverAvailable;
}

/**
 * Get list of available relief pitchers
 * v3c-3: Now properly excludes starting pitcher
 */
function getAvailableRelievers() {
    return usaLineup.filter((presIdx, lineupIdx) => {
        // Exclude anyone who has pitched AND the starting pitcher
        const hasAlreadyPitched = pitchersUsed.includes(presIdx);
        const isStartingPitcher = presIdx === startingPitcherIndex;
        return !hasAlreadyPitched && !isStartingPitcher;
    }).map(presIdx => presidents[presIdx]);
}

/**
 * Switch to a new pitcher
 * v5c-4: Added flag to skip option regeneration during reliever decision flow
 */
function switchPitcher(newPitcherPresidentIndex, isWarmedUp = false, skipOptionRegen = false) {
    // Mark current pitcher as used
    if (currentPitcherIndex !== null) {
        pitchersUsed.push(usaLineup[currentPitcherIndex]);
    }
    
    // Find lineup index of new pitcher
    const newLineupIndex = usaLineup.findIndex(presIdx => presIdx === newPitcherPresidentIndex);
    
    currentPitcherIndex = newLineupIndex;
    currentPitcher = presidents[newPitcherPresidentIndex];
    pitchCount = 0;
    inningPitchCount = 0;
    
    // v4c-1: Warmed-up pitchers start "fresh", cold pitchers start "normal"
    fatigueLevel = isWarmedUp ? 'fresh' : 'normal';
    console.log(`New pitcher: ${currentPitcher.name} (${isWarmedUp ? 'warmed' : 'cold'})`);
    
    // v3c-8: Reset question mode to NUMBER when bringing in relief
    // This gives struggling players a "relief" with easier questions
    currentMode = 'number';
    lineupLapsCompleted = 0; // Reset lap counter so mode rotates fresh
    console.log(`Questions reset to NUMBER mode`);
    
    // v4c-6: Stop alternating display and reset warmup tracking
    stopPitcherDisplayAlternate();
    isWarmingUp = false;
    warmingUpPitcher = null;
    warmingUpPitcherIndex = null;
    warmupBattersFaced = 0;
    
    // v4c-1 BUG FIX: If there's a current batter displayed, regenerate options with new mode
    // v5c-4: Skip this during reliever decision flow (options will be generated in loadPendingBatter)
    if (!skipOptionRegen && currentPresident && !pendingBatter) {
        currentQuestion = getQuestionText(currentMode);
        const options = generateOptions(currentPresident, currentMode);
        updateOptionsDisplay(options);
        showModePrompt();
        console.log(`Regenerated options for ${currentPresident.name} with new mode: ${currentMode}`);
    }
    
    updatePitchDisplay();
    updateBullpenButton();
    hideBullpenModal();
}

/**
 * Get choice difficulty modifier based on fatigue
 * Returns how "close" wrong answers should be to correct
 */
function getChoiceDifficultyFromFatigue() {
    // Fresh = easy choices (far from correct)
    // Gassed = hard choices (close to correct)
    switch (fatigueLevel) {
        case 'fresh': return { minDist: 8, maxDist: 20, label: 'Easy' };
        case 'normal': return { minDist: 5, maxDist: 12, label: 'Medium' };
        case 'tired': return { minDist: 2, maxDist: 7, label: 'Hard' };
        case 'gassed': return { minDist: 1, maxDist: 4, label: 'Very Hard' };
        default: return { minDist: 5, maxDist: 12, label: 'Medium' };
    }
}

// ============================================================================
// LINEUP MANAGEMENT - UPDATED v3c-2
// ============================================================================

function createLineups() {
    const allIndices = Array.from({ length: presidents.length }, (_, i) => i);
    const shuffled = shuffle(allIndices);
    
    // Split into two teams
    let oppTeamIndices = shuffled.slice(0, LINEUP_SIZE);
    let usaTeamIndices = shuffled.slice(LINEUP_SIZE, LINEUP_SIZE * 2);
    
    // Sort lineups by difficulty (hard batters first, easy batters last)
    // This mimics real baseball lineup construction
    oppLineup = sortLineupByDifficulty(oppTeamIndices);
    usaLineup = sortLineupByDifficulty(usaTeamIndices);
    
    lineupPosition = 0;
    lineupLapsCompleted = 0;
    
    selectTeams();
    
    console.log('Opponent lineup (sorted):', oppLineup.map(i => `${presidents[i].name}(d${presidents[i].difficulty})`));
    console.log('Our lineup (sorted):', usaLineup.map(i => `${presidents[i].name}(d${presidents[i].difficulty})`));
}

/**
 * Sort lineup by difficulty: hardest batters first (1-5), medium (6-7), easiest last (8-9)
 */
function sortLineupByDifficulty(indices) {
    // Sort by difficulty descending (5=hardest first, 1=easiest last)
    return [...indices].sort((a, b) => {
        const diffA = presidents[a].difficulty || 3;
        const diffB = presidents[b].difficulty || 3;
        return diffB - diffA; // Descending
    });
}

function getNextBatter() {
    const presidentIndex = oppLineup[lineupPosition];
    
    lineupPosition++;
    if (lineupPosition >= LINEUP_SIZE) {
        lineupPosition = 0;
        lineupLapsCompleted++;
        console.log(`Lineup turned over! Starting lap ${lineupLapsCompleted + 1}`);
        updateModeForLap();
    }
    
    return presidents[presidentIndex];
}

function updateModeForLap() {
    // v4c-1: Added 'successor' mode for 5-mode rotation
    const modes = ['number', 'years', 'predecessor', 'successor', 'state'];
    currentMode = modes[lineupLapsCompleted % modes.length];
    console.log(`Lap ${lineupLapsCompleted + 1}: Mode set to ${currentMode}`);
}

function getUpNextBatters(count = 3) {
    const upNext = [];
    for (let i = 0; i < count; i++) {
        const pos = (lineupPosition + i) % LINEUP_SIZE;
        const presIndex = oppLineup[pos];
        upNext.push(presidents[presIndex]);
    }
    return upNext;
}

// ============================================================================
// WALK LOGIC
// ============================================================================

function processWalk() {
    let runsScored = 0;
    
    if (bases[0] && bases[1] && bases[2]) {
        runsScored++;
    }
    
    if (bases[0] && bases[1]) {
        bases[2] = true;
    }
    
    if (bases[0]) {
        bases[1] = true;
    }
    
    bases[0] = true;
    
    return runsScored;
}

// ============================================================================
// OPTION GENERATION - UPDATED v3c-2 with fatigue-based difficulty
// ============================================================================

function generateOptions(president, mode) {
    if (mode === 'number') {
        return generateNumberOptions(president);
    } else if (mode === 'years') {
        return generateYearsOptions(president);
    } else if (mode === 'predecessor') {
        return generatePredecessorOptions(president);
    } else if (mode === 'successor') {
        return generateSuccessorOptions(president);
    } else if (mode === 'state') {
        return generateStateOptions(president);
    }
    return generateNumberOptions(president);
}

/**
 * Generate number options with fatigue-adjusted difficulty
 */
function generateNumberOptions(president) {
    if (president.name === "Cleveland") {
        const correctAnswer = "22 & 24";
        const wrongPairs = [];
        for (let i = 1; i <= 30; i++) {
            if (i !== 22) wrongPairs.push(`${i} & ${i + 2}`);
        }
        const options = shuffle([correctAnswer, ...shuffle(wrongPairs).slice(0, 4)]);
        options.push("WALK");
        return options;
    }
    
    const r = president.rank;
    const difficulty = getChoiceDifficultyFromFatigue();
    
    // Generate wrong answers based on fatigue-adjusted distance
    let possibleRanks = [];
    for (let i = 1; i <= 32; i++) {
        if (i === r || i === 24) continue; // Skip correct answer and Cleveland's gap
        
        const dist = Math.abs(i - r);
        if (dist >= difficulty.minDist && dist <= difficulty.maxDist) {
            possibleRanks.push(i);
        }
    }
    
    // If not enough options at this distance, expand range
    if (possibleRanks.length < 4) {
        for (let i = 1; i <= 32; i++) {
            if (i === r || i === 24 || possibleRanks.includes(i)) continue;
            possibleRanks.push(i);
        }
    }
    
    let incorrectRanks = shuffle(possibleRanks).slice(0, 4);
    
    const options = shuffle([r, ...incorrectRanks]).map(n => n.toString());
    options.push("WALK");
    return options;
}

/**
 * Generate year options with fatigue-adjusted difficulty
 */
function generateYearsOptions(president) {
    if (president.name === "Cleveland") {
        const correct = "1885-1889 & 1893-1897";
        const wrong = [
            "1881-1885 & 1889-1893",
            "1889-1893 & 1897-1901",
            "1877-1881 & 1885-1889",
            "1893-1897 & 1901-1905"
        ];
        const options = shuffle([correct, ...wrong]);
        options.push("WALK");
        return options;
    }
    
    const correctTerm = president.term;
    const r = president.rank;
    const difficulty = getChoiceDifficultyFromFatigue();
    
    // Get terms from presidents at fatigue-adjusted distances
    let wrongTerms = [];
    
    for (let i = 1; i <= 31; i++) {
        if (i === r || i === 22 || i === 24) continue;
        
        const dist = Math.abs(i - r);
        if (dist >= difficulty.minDist && dist <= difficulty.maxDist) {
            const p = presidents.find(pr => pr.rank === i);
            if (p) wrongTerms.push(p.term);
        }
    }
    
    // If not enough, add more
    if (wrongTerms.length < 4) {
        for (let i = Math.max(1, r - 8); i <= Math.min(32, r + 8); i++) {
            if (i === r || i === 22 || i === 24) continue;
            const p = presidents.find(pr => pr.rank === i);
            if (p && !wrongTerms.includes(p.term)) {
                wrongTerms.push(p.term);
            }
        }
    }
    
    wrongTerms = shuffle(wrongTerms).slice(0, 4);
    const options = shuffle([correctTerm, ...wrongTerms]);
    options.push("WALK");
    return options;
}

function generatePredecessorOptions(president) {
    const r = president.rank;
    
    if (r === 1) {
        const wrongNames = shuffle(presidents.slice(1, 10)).slice(0, 4).map(p => getShortPresidentName(p));
        const options = shuffle(["None - First President", ...wrongNames]);
        options.push("WALK");
        return options;
    }
    
    // v5c-6: Cleveland has TWO predecessors (one for each term)
    // 1st term predecessor: C. Arthur (#21)
    // 2nd term predecessor: B. Harrison (#23)
    if (president.name === "Cleveland") {
        const arthur = presidents.find(p => p.rank === 21);
        const harrison = presidents.find(p => p.rank === 23);
        const correct = `${getShortPresidentName(arthur)} & ${getShortPresidentName(harrison)}`;
        
        // Build wrong answers - pairs of presidents (excluding Cleveland, Arthur, Harrison)
        let wrongPairs = [];
        const excludeRanks = [21, 22, 23];
        const availablePresidents = presidents.filter(p => !excludeRanks.includes(p.rank));
        const shuffled = shuffle(availablePresidents);
        
        for (let i = 0; i < 8; i += 2) {
            if (shuffled[i] && shuffled[i+1]) {
                wrongPairs.push(`${getShortPresidentName(shuffled[i])} & ${getShortPresidentName(shuffled[i+1])}`);
            }
        }
        wrongPairs = wrongPairs.slice(0, 4);
        
        const options = shuffle([correct, ...wrongPairs]);
        options.push("WALK");
        return options;
    }
    
    // v3c-3 BUGFIX: Handle Cleveland's non-consecutive terms
    // Cleveland is stored as rank 22 but also served as #24
    // So McKinley (#25) predecessor is Cleveland (rank 22, served as #24)
    let predecessorRank = r - 1;
    if (r === 24) {
        predecessorRank = 23; // Cleveland's 2nd term predecessor is B. Harrison
    } else if (r === 25) {
        predecessorRank = 22; // McKinley's predecessor is Cleveland (stored as 22, served as #24)
    }
    
    const correctPredecessor = presidents.find(p => p.rank === predecessorRank);
    
    if (!correctPredecessor) {
        console.error(`Could not find predecessor with rank ${predecessorRank} for ${president.name} (rank ${r})`);
        const options = shuffle(presidents.slice(0, 5).map(p => getShortPresidentName(p)));
        options.push("WALK");
        return options;
    }
    
    const correct = getShortPresidentName(correctPredecessor);
    const correctPredIndex = presidents.indexOf(correctPredecessor);
    const currentPresIndex = presidents.indexOf(president);
    
    // Build wrong answers - exclude current president, correct answer, and Cleveland (confusing)
    let wrongIndices = [];
    for (let i = 0; i < presidents.length; i++) {
        if (i !== currentPresIndex && i !== correctPredIndex && presidents[i].name !== "Cleveland") {
            wrongIndices.push(i);
        }
    }
    wrongIndices = shuffle(wrongIndices).slice(0, 4);
    const wrong = wrongIndices.map(i => getShortPresidentName(presidents[i]));
    
    const options = shuffle([correct, ...wrong]);
    options.push("WALK");
    return options;
}

/**
 * v4c-1: Generate successor options - who came AFTER this president?
 * v5c-1: Fixed FDR to have Truman as correct answer
 * v5c-6: Fixed Cleveland to show both successors as one answer
 */
function generateSuccessorOptions(president) {
    const r = president.rank;
    
    // v5c-1 FIX: FDR (#32) - Truman was his successor (hardcoded since Truman isn't in our 1-32 dataset)
    if (r === 32) {
        // Get wrong answers from late presidents
        const wrongNames = shuffle(presidents.filter(p => p.rank > 25).slice(0, 4))
            .map(p => getShortPresidentName(p));
        const options = shuffle(["H. Truman", ...wrongNames]);
        options.push("WALK");
        return options;
    }
    
    // v5c-6: Cleveland has TWO successors (one for each term)
    // 1st term successor: B. Harrison (#23)
    // 2nd term successor: McKinley (#25)
    if (president.name === "Cleveland") {
        const harrison = presidents.find(p => p.rank === 23);
        const mckinley = presidents.find(p => p.rank === 25);
        const correct = `${getShortPresidentName(harrison)} & ${getShortPresidentName(mckinley)}`;
        
        // Build wrong answers - pairs of presidents (excluding Cleveland, Harrison, McKinley)
        let wrongPairs = [];
        const excludeRanks = [22, 23, 25];
        const availablePresidents = presidents.filter(p => !excludeRanks.includes(p.rank));
        const shuffled = shuffle(availablePresidents);
        
        for (let i = 0; i < 8; i += 2) {
            if (shuffled[i] && shuffled[i+1]) {
                wrongPairs.push(`${getShortPresidentName(shuffled[i])} & ${getShortPresidentName(shuffled[i+1])}`);
            }
        }
        wrongPairs = wrongPairs.slice(0, 4);
        
        const options = shuffle([correct, ...wrongPairs]);
        options.push("WALK");
        return options;
    }
    
    // v4c-1: Handle Cleveland's non-consecutive terms
    // Cleveland is rank 22 but served as #22 AND #24
    // So #22 Cleveland's successor is B. Harrison (#23)
    // And B. Harrison's (#23) successor is Cleveland again (as #24, but stored as 22)
    let successorRank;
    if (r === 22) {
        successorRank = 23; // Cleveland -> B. Harrison
    } else if (r === 23) {
        successorRank = 22; // B. Harrison -> Cleveland (2nd term)
    } else {
        successorRank = r + 1;
        // Skip 24 since Cleveland holds that spot
        if (successorRank === 24) successorRank = 25; // Actually would be McKinley
    }
    
    const correctSuccessor = presidents.find(p => p.rank === successorRank);
    
    if (!correctSuccessor) {
        console.error(`Could not find successor with rank ${successorRank} for ${president.name} (rank ${r})`);
        const options = shuffle(presidents.slice(0, 5).map(p => getShortPresidentName(p)));
        options.push("WALK");
        return options;
    }
    
    const correct = getShortPresidentName(correctSuccessor);
    const correctSuccIndex = presidents.indexOf(correctSuccessor);
    const currentPresIndex = presidents.indexOf(president);
    
    // Build wrong answers - exclude current president, correct answer, and Cleveland (confusing)
    let wrongIndices = [];
    for (let i = 0; i < presidents.length; i++) {
        if (i !== currentPresIndex && i !== correctSuccIndex && presidents[i].name !== "Cleveland") {
            wrongIndices.push(i);
        }
    }
    wrongIndices = shuffle(wrongIndices).slice(0, 4);
    const wrong = wrongIndices.map(i => getShortPresidentName(presidents[i]));
    
    const options = shuffle([correct, ...wrong]);
    options.push("WALK");
    return options;
}

function generateStateOptions(president) {
    const ctx = contextByRank[president.rank];
    const correctState = ctx ? ctx.state : "Virginia";
    
    const allStates = ["Virginia", "Ohio", "New York", "Massachusetts", "Tennessee", 
                       "Illinois", "Texas", "California", "Pennsylvania", "New Jersey",
                       "Indiana", "Kentucky", "New Hampshire", "Vermont", "Louisiana"];
    
    let wrongStates = allStates.filter(s => s !== correctState);
    wrongStates = shuffle(wrongStates).slice(0, 4);
    
    const options = shuffle([correctState, ...wrongStates]);
    options.push("WALK");
    return options;
}

function getCorrectAnswer(president, mode) {
    if (mode === 'number') {
        return president.name === "Cleveland" ? "22 & 24" : president.rank.toString();
    } else if (mode === 'years') {
        return president.name === "Cleveland" ? "1885-1889 & 1893-1897" : president.term;
    } else if (mode === 'predecessor') {
        if (president.rank === 1) return "None - First President";
        // v5c-6: Cleveland has two predecessors
        if (president.name === "Cleveland") {
            const arthur = presidents.find(p => p.rank === 21);
            const harrison = presidents.find(p => p.rank === 23);
            return `${getShortPresidentName(arthur)} & ${getShortPresidentName(harrison)}`;
        }
        // v3c-3 BUGFIX: Handle Cleveland's non-consecutive terms
        let predecessorRank = president.rank - 1;
        if (president.rank === 24) predecessorRank = 23;
        else if (president.rank === 25) predecessorRank = 22; // McKinley's pred is Cleveland
        const pred = presidents.find(p => p.rank === predecessorRank);
        return pred ? getShortPresidentName(pred) : "Unknown";
    } else if (mode === 'successor') {
        // v4c-1: Successor mode
        // v5c-1 FIX: FDR (rank 32) is last in our dataset, but Truman was his successor
        if (president.rank === 32) return "H. Truman";
        // v5c-6: Cleveland has two successors
        if (president.name === "Cleveland") {
            const harrison = presidents.find(p => p.rank === 23);
            const mckinley = presidents.find(p => p.rank === 25);
            return `${getShortPresidentName(harrison)} & ${getShortPresidentName(mckinley)}`;
        }
        let successorRank;
        if (president.rank === 22) successorRank = 23; // Cleveland -> B. Harrison
        else if (president.rank === 23) successorRank = 22; // B. Harrison -> Cleveland (2nd term)
        else {
            successorRank = president.rank + 1;
            if (successorRank === 24) successorRank = 25;
        }
        const succ = presidents.find(p => p.rank === successorRank);
        return succ ? getShortPresidentName(succ) : "Unknown";
    } else if (mode === 'state') {
        const ctx = contextByRank[president.rank];
        return ctx ? ctx.state : "Virginia";
    }
    return "";
}

function getQuestionText(mode) {
    const questions = {
        'number': 'What number president?',
        'years': 'What years did they serve?',
        'predecessor': 'Who was their predecessor?',
        'successor': 'Who came after them?',
        'state': 'What state were they from?'
    };
    return questions[mode] || '';
}

// ============================================================================
// HINT SYSTEM - UPDATED v3c-2 with context-aware hints
// ============================================================================

/**
 * Get enhanced hint tailored to question type
 */
function getEnhancedHint(president, mode) {
    const ctx = contextByRank[president.rank];
    
    // v3c-9: Better fallback when context is missing
    if (!ctx) {
        if (mode === 'state') {
            return `Think about ${president.name}'s regional associations.`;
        }
        if (mode === 'successor') {
            return `${president.name} was #${president.rank}. Who was #${president.rank + 1}?`;
        }
        return `${president.name} was #${president.rank} (${president.term})`;
    }
    
    if (mode === 'number') {
        // For NUMBER questions: focus on sequence and memorable order
        return getNumberModeHint(president, ctx);
    } else if (mode === 'years') {
        // For YEARS questions: focus on historical events and dates
        return getYearsModeHint(president, ctx);
    } else if (mode === 'predecessor') {
        // For PREDECESSOR: focus on succession chain
        return ctx.predecessorContext || ctx.anchorNote;
    } else if (mode === 'successor') {
        // v4c-1: For SUCCESSOR: focus on who came next
        return getSuccessorModeHint(president, ctx);
    } else if (mode === 'state') {
        // v3c-9: Better state hint with fallback
        if (ctx.birthplace) {
            return `Born: ${ctx.birthplace}`;
        }
        return ctx.anchorNote || `Think about regional associations.`;
    }
    return ctx.anchorNote || "No additional information available.";
}

/**
 * v4c-1: Hint for SUCCESSOR questions - focus on who came after
 */
function getSuccessorModeHint(president, ctx) {
    const rank = president.rank;
    
    // Special case: FDR has no successor in dataset
    if (rank === 32) {
        return "FDR was the last president in our 1789-1945 dataset.";
    }
    
    // Build a hint about the succession
    let hint = '';
    
    // Get successor info
    let succRank = rank === 22 ? 23 : (rank === 23 ? 22 : rank + 1);
    if (succRank === 24) succRank = 25;
    
    const succ = presidents.find(p => p.rank === succRank);
    if (succ) {
        const succCtx = contextByRank[succRank];
        if (succCtx && succCtx.anchorNote) {
            hint = `The next president: ${succCtx.anchorNote}`;
        }
    }
    
    // Add context about how presidency ended
    if (ctx.endOfTerm) {
        hint = hint ? `${hint} ${ctx.endOfTerm}` : ctx.endOfTerm;
    }
    
    return hint || ctx.anchorNote || "Think about who followed this president.";
}

/**
 * Hint for NUMBER questions - focus on who came before/after
 */
function getNumberModeHint(president, ctx) {
    const rank = president.rank;
    
    // Build a sequence hint
    let hint = '';
    
    // Get predecessor name
    if (rank > 1) {
        const predRank = rank === 24 ? 23 : rank - 1;
        const pred = presidents.find(p => p.rank === predRank);
        if (pred) {
            hint += `After ${pred.name}`;
        }
    }
    
    // Get successor name
    if (rank < 32) {
        const succRank = rank === 22 ? 23 : rank + 1;
        const succ = presidents.find(p => p.rank === succRank);
        if (succ) {
            hint += hint ? `, before ${succ.name}` : `Before ${succ.name}`;
        }
    }
    
    // v3c-5: Add anchor note - removed overly aggressive year filtering
    // Years in context are fine; we just didn't want "In 1834..." type hints for NUMBER questions
    if (ctx.anchorNote) {
        hint += hint ? `. ${ctx.anchorNote}` : ctx.anchorNote;
    }
    
    return hint || ctx.predecessorContext || "Think about the sequence of presidents.";
}

/**
 * Hint for YEARS questions - focus on events and dates
 */
function getYearsModeHint(president, ctx) {
    // Prioritize major events which usually contain years
    if (ctx.majorEvents) {
        return ctx.majorEvents;
    }
    
    // Add adaptive hint based on wrong answer
    if (lastWrongAnswer) {
        const adaptive = getAdaptiveYearsHint(president, lastWrongAnswer);
        if (adaptive) return adaptive;
    }
    
    return ctx.anchorNote || "Think about what era this president served in.";
}

/**
 * Generate adaptive hint based on wrong answer for YEARS mode
 */
function getAdaptiveYearsHint(president, wrongAnswer) {
    const correctTerm = president.term;
    
    // Parse years from answers
    const correctStart = parseInt(correctTerm.substring(0, 4));
    const wrongStart = parseInt(wrongAnswer.substring(0, 4));
    
    if (isNaN(correctStart) || isNaN(wrongStart)) return null;
    
    const diff = correctStart - wrongStart;
    
    // Determine term length
    const termYears = correctTerm.includes('&') ? 8 : 
                      (correctTerm.includes('-') ? 
                       parseInt(correctTerm.split('-')[1]) - correctStart : 1);
    
    if (Math.abs(diff) > 40) {
        // Way off - give era hint
        if (correctStart < 1850) return "This was a pre-Civil War president.";
        if (correctStart < 1900) return "This was a late 19th century president.";
        return "This was a 20th century president.";
    }
    
    if (diff > 0) {
        return `Earlier than that - try going back ${Math.abs(diff)} years.`;
    } else {
        return `Later than that - try going forward ${Math.abs(diff)} years.`;
    }
}

// ============================================================================
// INNING LOGIC - UPDATED v3c-2
// ============================================================================

function startNewInning() {
    hideAllScreens();
    gameArea.style.display = 'block';
    
    outs = 0;
    currentInningHits = 0;
    currentInningRuns = 0;
    currentInningTB = 0;
    bases = [false, false, false];
    batterPosition = 0;
    runsThisAtBat = 0;
    hitsThisInning = {};
    walksThisInning = 0;
    inningPitchCount = 0; // Reset inning pitch count
    
    // v5c-2: Auto-complete warmup at start of new inning
    // If a reliever was warming, they've had a full half-inning to warm up
    if (isWarmingUp && warmingUpPitcher) {
        warmupBattersFaced = warmupRequired; // Force them to be ready
        console.log(`${warmingUpPitcher.name} fully warmed during offensive half`);
    }
    
    if (inning === 1) {
        updateModeForLap();
        presidentsAskedThisGame = new Set();
        totalCorrectFirstTry = 0;
        totalQuestionsAsked = 0;
        inningScores = [];
        homeTotalRuns = 0;
        awayTotalRuns = 0;
        timerStart = Date.now();
    }
    
    // v3c-9: Ghost runner for extra innings (runner on 2nd)
    if (isExtraInnings()) {
        bases[1] = true; // Runner on 2nd base
        console.log(`Extra innings (${inning}th) - Ghost runner on 2nd base`);
        showMessage(`<em>Extra Innings! Ghost runner on 2nd base.</em>`);
    }
    
    // Recalculate fatigue (inning pitch count reset may change it)
    fatigueLevel = calculateFatigue();
    
    updateScoreboard();
    updateBaseballProgress();
    updateBasesDisplay();
    updatePitchDisplay();
    updateBullpenButton();
    pickNextPresident();
}

function recordHitThisInning(presidentIndex, hitType, rbi) {
    if (!hitsThisInning[presidentIndex]) {
        hitsThisInning[presidentIndex] = [];
    }
    hitsThisInning[presidentIndex].push({ type: hitType, rbi: rbi });
}

function finishAtBat() {
    recordAtBatStats();
    
    // Add pitches for this at-bat
    addPitchesForAtBat();
    
    // v4c-1: Advance bullpen warmup
    advanceWarmup();
    
    if (batterPosition >= 1 && batterPosition <= 3) {
        bases[batterPosition - 1] = true;
    }
    
    batterPosition = 0;
    runsThisAtBat = 0;
    lastWrongAnswer = null; // Reset for next at-bat
    resetCurrentAtBatStats();
}

function pickNextPresident() {
    if (outs >= OUTS_PER_INNING) {
        endInning();
        return;
    }
    
    // v5c-4: Check if warmed-up reliever is ready - prompt user BEFORE loading batter
    // IMPORTANT: Don't advance lineup yet - just peek at who's next
    if (isRelieverWarmedUp()) {
        showRelieverDecisionPrompt();
        return; // Don't continue until user decides
    }
    
    // Continue with normal batter loading
    loadNextBatter();
}

// v5c-4: Store the peeked batter info for use after reliever decision
let pendingBatterIndex = null;
let pendingBatter = null;

/**
 * v5c-2: Show the "Now up" batter card but prompt for reliever decision before question
 * v5c-3: Fixed - don't advance lineup position yet, just PEEK at next batter
 * v5c-4: Store peeked batter for use after decision
 */
function showRelieverDecisionPrompt() {
    // v3c-3: Hide bullpen tooltip on new batter
    hideBullpenTooltip();
    
    // v3c-9: Re-enable bullpen button after play completes
    enableBullpenButton();
    
    // v5c-4: PEEK at next batter and STORE it for after decision
    // This is the batter they'll face regardless of pitcher choice
    pendingBatterIndex = oppLineup[lineupPosition];
    pendingBatter = presidents[pendingBatterIndex];
    
    console.log(`Reliever decision prompt - Pending batter: ${pendingBatter.name}`);
    
    // Show the batter's card (preview only)
    const imgSrc = `assets/cards/${getSuitLetter(pendingBatter.suit)}-${pendingBatter.rank}.jpg`;
    currentImage.style.opacity = 0;
    
    // Clear any previous fallback text
    const existingFallback = document.getElementById('image-fallback-text');
    if (existingFallback) existingFallback.remove();
    
    setTimeout(() => {
        currentImage.src = imgSrc;
        currentImage.onload = () => {
            currentImage.style.opacity = 1;
            updateRightSideHeight();
        };
        currentImage.onerror = () => {
            console.warn(`Image failed to load: ${imgSrc}`);
            currentImage.style.display = 'none';
            const fallbackDiv = document.createElement('div');
            fallbackDiv.id = 'image-fallback-text';
            fallbackDiv.className = 'image-fallback';
            fallbackDiv.innerHTML = `<div class="fallback-name">${getFullPresidentName(pendingBatter)}</div>`;
            currentImage.parentNode.insertBefore(fallbackDiv, currentImage.nextSibling);
        };
    }, 100);
    
    // Show "Now up:" message instead of question
    showMessage(`<em>Now up: ${getShortPresidentName(pendingBatter)}</em>`);
    
    // Use hint overlay for the decision prompt (with cleaner layout)
    showRelieverPromptOverlay();
    updateBaseballProgress();
}

/**
 * v5c-2: Show overlay prompting user to bring in warmed-up reliever
 * v5c-3: Cleaner layout - question first, then buttons, hide default labels
 */
function showRelieverPromptOverlay() {
    const hintTextEl = hintOverlay.querySelector('.hint-text');
    const correctAnswerEl = hintOverlay.querySelector('.correct-answer');
    const labelEls = hintOverlay.querySelectorAll('.label');
    const tapContinueEl = hintOverlay.querySelector('.tap-continue');
    
    const relieverName = getShortPresidentName(warmingUpPitcher);
    const currentPitcherName = getShortPresidentName(currentPitcher);
    
    // v5c-3: Hide the "Correct Answer:" and "Clue:" labels
    labelEls.forEach(el => el.style.display = 'none');
    if (tapContinueEl) tapContinueEl.style.display = 'none';
    
    // v5c-3: Put the question/prompt in the hint-text area (top), buttons in correct-answer area (bottom)
    if (hintTextEl) {
        hintTextEl.innerHTML = `
            <div class="reliever-prompt">
                <div class="reliever-ready-name">🔥 ${relieverName} is ready!</div>
                <div class="reliever-prompt-text">Put him in now?</div>
            </div>
        `;
    }
    
    if (correctAnswerEl) {
        correctAnswerEl.innerHTML = `
            <div class="reliever-decision-btns">
                <button id="reliever-yes-btn" class="reliever-btn yes">Yes - Bring in ${relieverName}</button>
                <button id="reliever-no-btn" class="reliever-btn no">No - Keep ${currentPitcherName}</button>
            </div>
        `;
    }
    
    hintOverlay.classList.add('visible');
    hintOverlay.classList.add('reliever-mode'); // v5c-3: Add class for styling
    optionDivs.forEach(div => div.style.display = 'none');
    
    // Add click handlers for the decision buttons
    // v5c-5: Stop propagation to prevent hintOverlay click handler from firing
    setTimeout(() => {
        const yesBtn = document.getElementById('reliever-yes-btn');
        const noBtn = document.getElementById('reliever-no-btn');
        
        if (yesBtn) {
            yesBtn.addEventListener('click', (e) => { e.stopPropagation(); handleRelieverYes(); });
            yesBtn.addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); handleRelieverYes(); });
        }
        if (noBtn) {
            noBtn.addEventListener('click', (e) => { e.stopPropagation(); handleRelieverNo(); });
            noBtn.addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); handleRelieverNo(); });
        }
    }, 100);
}

/**
 * v5c-3: Restore the hint overlay labels (called when hiding)
 */
function restoreHintOverlayLabels() {
    const labelEls = hintOverlay.querySelectorAll('.label');
    const tapContinueEl = hintOverlay.querySelector('.tap-continue');
    
    labelEls.forEach(el => el.style.display = '');
    if (tapContinueEl) tapContinueEl.style.display = '';
    hintOverlay.classList.remove('reliever-mode');
}

/**
 * v5c-2: User chose YES - bring in the reliever, then load the PENDING batter
 * v5c-4: Fixed - use stored pending batter, don't call getNextBatter again
 */
function handleRelieverYes() {
    hideHintOverlay();
    restoreHintOverlayLabels();
    
    // v5c-4: Bring in the reliever, skip option regen (we'll do it in loadPendingBatter)
    bringInWarmedUpReliever(true);
    
    // v5c-4: Now load the PENDING batter (the one we showed in the preview)
    loadPendingBatter();
}

/**
 * v5c-2: User chose NO - keep current pitcher, load the PENDING batter
 * v5c-4: Fixed - use stored pending batter, don't call getNextBatter again
 */
function handleRelieverNo() {
    hideHintOverlay();
    restoreHintOverlayLabels();
    
    // v5c-4: Load the PENDING batter (the one we showed in the preview)
    loadPendingBatter();
}

/**
 * v5c-4: Load the pending batter that was previewed during reliever decision
 * This advances the lineup and sets up the question
 */
function loadPendingBatter() {
    if (!pendingBatter || pendingBatterIndex === null) {
        console.error('No pending batter to load!');
        loadNextBatter(); // Fallback
        return;
    }
    
    // v3c-3: Hide bullpen tooltip on new batter
    hideBullpenTooltip();
    
    // v3c-9: Re-enable bullpen button after play completes
    enableBullpenButton();
    
    batterPosition = 0;
    runsThisAtBat = 0;
    lastWrongAnswer = null;
    resetCurrentAtBatStats();
    
    // v5c-4: Use the stored pending batter, but still advance the lineup
    currentPresident = pendingBatter;
    presidentsAskedThisGame.add(pendingBatterIndex);
    
    // NOW advance the lineup position (since we're committing to this batter)
    lineupPosition++;
    if (lineupPosition >= LINEUP_SIZE) {
        lineupPosition = 0;
        lineupLapsCompleted++;
        console.log(`Lineup turned over! Starting lap ${lineupLapsCompleted + 1}`);
        updateModeForLap();
    }
    
    totalQuestionsAsked++;
    attempts = 0;
    questionStartTime = Date.now();
    
    currentQuestion = getQuestionText(currentMode);
    
    // v5c-6: Removed verbose debug log
    
    // Card is already displayed from preview, just make sure it's visible
    currentImage.style.opacity = 1;
    
    // Clear pending batter
    pendingBatter = null;
    pendingBatterIndex = null;
    
    const options = generateOptions(currentPresident, currentMode);
    updateOptionsDisplay(options);
    
    showModePrompt();
    updateBaseballProgress();
    updatePitchDisplay();
    updateBullpenButton();
}

/**
 * v5c-2: Separated batter loading logic for reuse (normal flow without reliever prompt)
 */
function loadNextBatter() {
    // v3c-3: Hide bullpen tooltip on new batter
    hideBullpenTooltip();
    
    // v3c-9: Re-enable bullpen button after play completes
    enableBullpenButton();
    
    batterPosition = 0;
    runsThisAtBat = 0;
    lastWrongAnswer = null;
    resetCurrentAtBatStats();
    
    currentPresident = getNextBatter();
    const presIndex = presidents.indexOf(currentPresident);
    presidentsAskedThisGame.add(presIndex);
    
    totalQuestionsAsked++;
    attempts = 0;
    questionStartTime = Date.now(); // v3c-3: Track when question was shown
    
    currentQuestion = getQuestionText(currentMode);
    
    console.log(`Inning ${inning}, Outs: ${outs}, Mode: ${currentMode}, Batter: ${currentPresident.name} (diff: ${currentPresident.difficulty})`);
    
    const imgSrc = `assets/cards/${getSuitLetter(currentPresident.suit)}-${currentPresident.rank}.jpg`;
    currentImage.style.opacity = 0;
    
    // v3c-9: Clear any previous fallback text
    const existingFallback = document.getElementById('image-fallback-text');
    if (existingFallback) existingFallback.remove();
    
    setTimeout(() => {
        currentImage.src = imgSrc;
        currentImage.onload = () => {
            currentImage.style.opacity = 1;
            updateRightSideHeight();
        };
        // v3c-9: Add fallback if image fails to load
        // v4c-1: Show only FULL name - don't give away the answer (rank or term)
        currentImage.onerror = () => {
            console.warn(`Image failed to load: ${imgSrc}`);
            currentImage.style.display = 'none';
            
            // Create fallback text display - FULL NAME ONLY
            // We don't show rank or term because those could be the answer!
            const fallbackDiv = document.createElement('div');
            fallbackDiv.id = 'image-fallback-text';
            fallbackDiv.className = 'image-fallback';
            
            // Get the full name (e.g., "George Washington" not just "Washington")
            const fullName = getFullPresidentName(currentPresident);
            
            fallbackDiv.innerHTML = `
                <div class="fallback-name">${fullName}</div>
            `;
            currentImage.parentNode.insertBefore(fallbackDiv, currentImage.nextSibling);
        };
    }, 100);
    
    const options = generateOptions(currentPresident, currentMode);
    updateOptionsDisplay(options);
    
    showModePrompt();
    hideHintOverlay();
    updateBaseballProgress();
}

function showModePrompt() {
    // v4c-6: Just show the question - warmup info now shows in pitcher area
    showMessage(`<em>${currentQuestion}</em>`);
}

function endInning() {
    awayTotalRuns += currentInningRuns;
    
    // v3c-7: Calculate LOB for top half (opponent's runners left on base)
    const topLOB = bases.filter(b => b).length;
    awayLOB += topLOB;
    
    // v3c-9: Check if home team already won (no need to bat in bottom of 9th+)
    // This happens if away team didn't score and home is ahead
    const skipBottomHalf = (inning >= 9 && homeTotalRuns > awayTotalRuns);
    
    if (skipBottomHalf) {
        // Home team wins without needing to bat
        inningScores.push({
            awayRuns: currentInningRuns,
            homeRuns: 'X', // Didn't bat
            hits: currentInningHits,
            homeHits: 0,
            walks: walksThisInning,
            tb: currentInningTB,
            pitches: inningPitchCount,
            homePitches: 0,
            awayLOB: topLOB,
            homeLOB: 0
        });
        
        lastHomeInningResults = {
            runs: 0,
            hits: 0,
            playByPlay: [{ isSkipped: true, message: 'Home team wins - no need to bat!' }],
            pitches: 0,
            oppPitcherName: oppPitcher ? getShortPresidentName(oppPitcher) : '???',
            lob: 0
        };
        
        bases = [false, false, false];
        batterPosition = 0;
        runsThisAtBat = 0;
        
        showFinalResults();
        return;
    }
    
    // v3c-5: Simulate our offensive half-inning
    const homeResults = simulateHomeHalfInning();
    const homeInningRuns = lastHomeInningResults.runs;
    const homeInningHits = lastHomeInningResults.hits;
    const bottomLOB = lastHomeInningResults.lob || 0; // v3c-7
    homeLOB += bottomLOB;
    homeTotalRuns += homeInningRuns;
    
    inningScores.push({
        awayRuns: currentInningRuns,
        homeRuns: homeInningRuns,
        hits: currentInningHits,
        homeHits: homeInningHits, // v3c-5: Track our hits too
        walks: walksThisInning,
        tb: currentInningTB,
        pitches: inningPitchCount,
        homePitches: lastHomeInningResults.pitches, // v3c-5: Opponent's pitches
        awayLOB: topLOB,   // v3c-7
        homeLOB: bottomLOB // v3c-7
    });
    
    bases = [false, false, false];
    batterPosition = 0;
    runsThisAtBat = 0;
    
    // v5c-1 FIX: Always show inning recap first, even for walk-off wins
    // The recap screen will check checkGameComplete() and show "View Final Results" button
    // This ensures the offensive animation plays before showing final results
    showInningComplete();
}

/**
 * Simulate our team's offensive half-inning
 * v3c-5: Uses BA, slugging, speed, and opponent pitcher fatigue
 * v3c-6: Now stores detailed data for animated playback
 * v5c-6: Fixed walk-off - stops simulation as soon as home team takes lead in 9th+
 */
function simulateHomeHalfInning() {
    let runs = 0;
    let hits = 0;
    let outs = 0;
    let simBases = [false, false, false]; // 1st, 2nd, 3rd
    let playByPlay = []; // Detailed play data for animation
    let inningPitches = 0;
    let isWalkOff = false; // v5c-6: Track if this is a walk-off win
    
    // v3c-9: Ghost runner for extra innings
    if (isExtraInnings()) {
        simBases[1] = true; // Runner on 2nd base
        playByPlay.push({
            isGhostRunner: true,
            message: 'Ghost runner takes 2nd base',
            basesAfter: [...simBases],
            outs: 0,
            totalRuns: 0
        });
    }
    
    // Initialize opponent pitcher if not set
    if (!oppPitcher) {
        initializeOpponentPitcher();
    }
    
    // Store starting pitcher for animation
    const startingOppPitcher = getShortPresidentName(oppPitcher);
    
    // v5c-6: Check if this is a potential walk-off inning (9th or later, tied or losing)
    const canWalkOff = inning >= 9;
    
    while (outs < 3 && !isWalkOff) {
        // Get current batter from our lineup
        const batterIdx = usaLineup[homeLineupPosition];
        const batter = presidents[batterIdx];
        const stats = playerBattingStats[batterIdx] || { hits: 20, atBats: 80 };
        
        // Calculate effective BA based on opponent pitcher fatigue
        const fatigueBonus = getOppFatigueBonus();
        const effectiveBA = Math.min(0.400, (stats.hits / stats.atBats) + fatigueBonus);
        
        // Simulate pitches for this at-bat (3-7 based on situation)
        const pitchesThisAB = Math.floor(Math.random() * 5) + 3;
        inningPitches += pitchesThisAB;
        oppPitchCount += pitchesThisAB;
        
        // Update opponent fatigue
        updateOppFatigue();
        
        // Determine outcome
        const result = simulateAtBat(batter, effectiveBA, simBases);
        
        // Store bases state BEFORE this at-bat
        const basesBefore = [...simBases];
        
        let runsScored = 0;
        if (result.isOut) {
            outs++;
            // Record out for batting average (no hit)
            recordBattingResult(batterIdx, false);
        } else {
            hits++;
            // Record hit for batting average
            recordBattingResult(batterIdx, true);
            
            // Process hit - advance runners
            runsScored = advanceRunners(simBases, result.basesGained, batter.speed);
            runs += runsScored;
            
            // Place batter on base (if not HR)
            if (result.basesGained < 4) {
                simBases[result.basesGained - 1] = true;
            }
        }
        
        // v3c-6: Store detailed play info for animation
        // v3c-8: Added batterRank for jersey number display
        playByPlay.push({
            batterName: getShortPresidentName(batter),
            batterRank: batter.rank, // v3c-8: Jersey number
            batterIdx: batterIdx,
            result: result.description,
            isOut: result.isOut,
            runsScored: runsScored,
            basesAfter: [...simBases],
            outs: outs,
            totalRuns: runs
        });
        
        // v5c-6: Check for walk-off win (home team takes lead in 9th or later)
        if (canWalkOff && (homeTotalRuns + runs) > awayTotalRuns) {
            isWalkOff = true;
            playByPlay.push({
                isWalkOff: true,
                message: '🎉 WALK-OFF WIN! 🎉',
                basesAfter: [...simBases],
                outs: outs,
                totalRuns: runs
            });
            break; // Stop the inning immediately
        }
        
        // Advance lineup position
        homeLineupPosition = (homeLineupPosition + 1) % LINEUP_SIZE;
        
        // Check if opponent should change pitchers (simplified - after 100 pitches or gassed)
        if (oppPitchCount > 100 && oppFatigueLevel === 'gassed' && oppPitchersUsed.length < 8) {
            changeOpponentPitcher();
            playByPlay.push({
                isPitchingChange: true,
                newPitcher: getShortPresidentName(oppPitcher),
                basesAfter: [...simBases],
                outs: outs,
                totalRuns: runs
            });
        }
    }
    
    // v3c-7: Calculate LOB (runners left on base at end of inning)
    // v5c-6: Don't count LOB for walk-off wins (game ended mid-inning)
    const inningLOB = isWalkOff ? 0 : simBases.filter(b => b).length;
    
    // v5c-9: Get opponent pitcher ERA (update their stats with runs allowed this inning)
    const oppPitcherERAStat = pitcherERAStats[oppPitcherIndex];
    const oppPitcherERA = oppPitcherERAStat ? oppPitcherERAStat.era.toFixed(2) : '-.--';
    // Track opponent pitcher's cumulative ER this game
    if (!oppPitcher.gameER) oppPitcher.gameER = 0;
    oppPitcher.gameER += runs;
    
    // Store for display - v3c-6: include pitcher info for animation
    lastHomeInningResults = {
        runs: runs,
        hits: hits,
        playByPlay: playByPlay,
        pitches: inningPitches,
        oppPitcherName: startingOppPitcher,
        oppPitcherER: oppPitcher.gameER, // v5c-9: Cumulative ER this game
        oppPitcherERA: oppPitcherERA, // v5c-9: Season ERA
        lob: inningLOB, // v3c-7
        isWalkOff: isWalkOff // v5c-6
    };
    
    return runs;
}

/**
 * Initialize opponent's starting pitcher (pick their best available)
 */
function initializeOpponentPitcher() {
    // Sort opponent lineup by stamina to find their best pitcher
    const sorted = [...oppLineup]
        .map(idx => ({ idx, stamina: presidents[idx].stamina }))
        .sort((a, b) => b.stamina - a.stamina);
    
    oppPitcherIndex = sorted[0].idx;
    oppPitcher = presidents[oppPitcherIndex];
    oppPitchCount = 0;
    oppFatigueLevel = 'fresh';
    oppPitchersUsed = [oppPitcherIndex];
    
    console.log(`Opponent starting pitcher: ${oppPitcher.name} (Stamina: ${oppPitcher.stamina})`);
}

/**
 * Change opponent pitcher to next best available
 */
function changeOpponentPitcher() {
    const available = oppLineup.filter(idx => !oppPitchersUsed.includes(idx));
    if (available.length === 0) return;
    
    // Pick best remaining
    const sorted = available
        .map(idx => ({ idx, stamina: presidents[idx].stamina }))
        .sort((a, b) => b.stamina - a.stamina);
    
    oppPitcherIndex = sorted[0].idx;
    oppPitcher = presidents[oppPitcherIndex];
    oppPitchCount = 0;
    oppFatigueLevel = 'fresh';
    oppPitchersUsed.push(oppPitcherIndex);
}

/**
 * Update opponent pitcher's fatigue level
 */
function updateOppFatigue() {
    if (!oppPitcher) return;
    const ratio = oppPitchCount / oppPitcher.stamina;
    
    if (ratio < 0.50) oppFatigueLevel = 'fresh';
    else if (ratio < 0.75) oppFatigueLevel = 'normal';
    else if (ratio < 0.90) oppFatigueLevel = 'tired';
    else oppFatigueLevel = 'gassed';
}

/**
 * Get batting bonus based on opponent pitcher fatigue
 */
function getOppFatigueBonus() {
    switch (oppFatigueLevel) {
        case 'fresh': return 0;
        case 'normal': return 0.015;
        case 'tired': return 0.035;
        case 'gassed': return 0.060;
        default: return 0;
    }
}

/**
 * Simulate a single at-bat
 * Returns { isOut, basesGained, description }
 */
function simulateAtBat(batter, effectiveBA, bases) {
    const rand = Math.random();
    
    // Determine if hit or out
    if (rand > effectiveBA) {
        // Out - determine type
        const outRand = Math.random();
        if (outRand < 0.4) {
            return { isOut: true, basesGained: 0, description: 'grounds out' };
        } else if (outRand < 0.7) {
            return { isOut: true, basesGained: 0, description: 'flies out' };
        } else if (outRand < 0.85) {
            return { isOut: true, basesGained: 0, description: 'strikes out' };
        } else {
            return { isOut: true, basesGained: 0, description: 'lines out' };
        }
    }
    
    // It's a hit! Determine type based on slugging and speed
    const slugging = batter.slugging || 0.35;
    const speed = batter.speed || 2;
    
    // Extra base hit probability based on slugging
    // Higher slugging = more extra base hits
    const extraBaseChance = (slugging - 0.28) * 2; // 0.28 SLG = 0% XBH, 0.48 SLG = 40% XBH
    const hitRand = Math.random();
    
    if (hitRand < extraBaseChance) {
        // Extra base hit
        const xbhRand = Math.random();
        
        // Home run chance based on slugging (power)
        const hrChance = (slugging - 0.35) * 1.5; // 0.35 SLG = 0% HR, 0.50 SLG = 22.5% of XBH
        if (xbhRand < hrChance) {
            return { isOut: false, basesGained: 4, description: 'HOME RUN!' };
        }
        
        // Triple chance based on speed
        const tripleChance = speed * 0.05; // Speed 1 = 5%, Speed 4 = 20% of remaining XBH
        if (xbhRand < hrChance + tripleChance) {
            return { isOut: false, basesGained: 3, description: 'triples!' };
        }
        
        // Otherwise double
        return { isOut: false, basesGained: 2, description: 'doubles' };
    }
    
    // Single
    return { isOut: false, basesGained: 1, description: 'singles' };
}

/**
 * Advance runners on the bases and return runs scored
 */
function advanceRunners(bases, basesGained, batterSpeed) {
    let runs = 0;
    
    if (basesGained === 4) {
        // Home run - everyone scores
        if (bases[2]) runs++;
        if (bases[1]) runs++;
        if (bases[0]) runs++;
        runs++; // Batter scores
        bases[0] = bases[1] = bases[2] = false;
        return runs;
    }
    
    // Advance runners based on hit type and speed
    // Faster runners take extra bases more often
    const extraBaseChance = batterSpeed * 0.1; // 10-40% chance for extra base
    
    if (basesGained >= 1) {
        // Runner on 3rd scores
        if (bases[2]) {
            runs++;
            bases[2] = false;
        }
        
        // Runner on 2nd
        if (bases[1]) {
            if (basesGained >= 2 || Math.random() < extraBaseChance) {
                runs++; // Scores from 2nd on single (if fast) or any XBH
            } else {
                bases[2] = true; // Advances to 3rd
            }
            bases[1] = false;
        }
        
        // Runner on 1st
        if (bases[0]) {
            if (basesGained >= 2) {
                if (basesGained === 3 || Math.random() < extraBaseChance) {
                    runs++; // Scores from 1st on triple or fast double
                } else {
                    bases[2] = true; // To 3rd on double
                }
            } else {
                // Single - advance based on speed
                if (Math.random() < extraBaseChance) {
                    bases[2] = true; // Fast runner takes 3rd
                } else {
                    bases[1] = true; // Normal advance to 2nd
                }
            }
            bases[0] = false;
        }
    }
    
    return runs;
}

/**
 * Wrapper for backward compatibility - calls simulation
 */
function generateHomeInningRuns() {
    return simulateHomeHalfInning();
}

/**
 * Check if game is complete
 * v3c-9: Fixed game-ending logic
 * - After 9 innings: game ends if not tied
 * - Extra innings only if tied
 * - Home team wins immediately if they take lead in their half
 */
function checkGameComplete() {
    // Minimum 9 innings AND 3 laps through lineup
    if (inning < 9 || lineupLapsCompleted < 3) {
        return false;
    }
    
    // After 9+ innings, check score
    if (homeTotalRuns !== awayTotalRuns) {
        // Not tied - game is over
        return true;
    }
    
    // Game is tied - go to extra innings
    return false;
}

/**
 * Check if home team just won (walk-off)
 * Called after bottom half simulation
 */
function isWalkOffWin() {
    // In 9th inning or later, if home team is ahead after their at-bat, they win
    return inning >= 9 && homeTotalRuns > awayTotalRuns;
}

/**
 * Check if we're in extra innings (10th or later)
 */
function isExtraInnings() {
    return inning >= 10;
}

// ============================================================================
// DISPLAY FUNCTIONS - UPDATED v3c-2
// ============================================================================

function updateRightSideHeight() {
    const rightSide = document.getElementById('right-side');
    if (currentImage && currentImage.offsetHeight > 0) {
        rightSide.style.height = currentImage.offsetHeight + 'px';
        rightSide.style.maxHeight = currentImage.offsetHeight + 'px';
    }
}

function updateBasesDisplay() {
    const diamond = document.getElementById('bases-diamond');
    if (!diamond) return;
    
    const base1 = diamond.querySelector('.base-1');
    const base2 = diamond.querySelector('.base-2');
    const base3 = diamond.querySelector('.base-3');
    
    const show1st = bases[0] || batterPosition === 1;
    const show2nd = bases[1] || batterPosition === 2;
    const show3rd = bases[2] || batterPosition === 3;
    
    if (base1) base1.classList.toggle('occupied', show1st);
    if (base2) base2.classList.toggle('occupied', show2nd);
    if (base3) base3.classList.toggle('occupied', show3rd);
}

function updateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    if (!scoreboard) return;
    
    scoreboard.innerHTML = `
        <div class="score-row away">
            <span class="team-abbr">${awayTeam ? awayTeam.abbr : 'AWY'}</span>
            <span class="team-score">${awayTotalRuns + currentInningRuns}</span>
        </div>
        <div class="inning-indicator">
            <span class="inning-arrow">▲</span>
            <span class="inning-num">${inning}</span>
        </div>
        <div class="score-row home">
            <span class="team-abbr">${homeTeam ? homeTeam.abbr : 'HME'}</span>
            <span class="team-score">${homeTotalRuns}</span>
        </div>
    `;
}

/**
 * Update pitch count display - NEW v3c-2
 */
function updatePitchDisplay() {
    const pitchDisplay = document.getElementById('pitch-display');
    const pitcherNameEl = document.getElementById('current-pitcher-name');
    
    // v4c-6: Handle alternating pitcher/warmup display
    if (pitcherNameEl && currentPitcher) {
        if (isWarmingUp && showingWarmupInfo) {
            // Show warmup status
            const warmupStatus = getWarmupStatusText();
            const isReady = isRelieverWarmedUp();
            pitcherNameEl.innerHTML = `<span class="warmup-name ${isReady ? 'ready' : ''}">${warmupStatus}</span>`;
        } else {
            // Show current pitcher name
            pitcherNameEl.textContent = getShortPresidentName(currentPitcher);
        }
    }
    
    if (!pitchDisplay) return;
    
    // Show inning pitch count if > 20
    let displayText = `P: ${pitchCount}`;
    if (inningPitchCount > 20) {
        displayText += ` <span class="inning-pitches">(${inningPitchCount})</span>`;
    }
    
    // Fatigue indicator
    const fatigueColors = {
        fresh: '#4CAF50',
        normal: '#FFC107', 
        tired: '#FF9800',
        gassed: '#f44336'
    };
    
    const fatigueIcons = {
        fresh: '🟢',
        normal: '🟡',
        tired: '🟠',
        gassed: '🔴'
    };
    
    pitchDisplay.innerHTML = `
        <span class="pitch-count">${displayText}</span>
        <span class="fatigue-indicator" style="color: ${fatigueColors[fatigueLevel]}" title="${fatigueLevel}">${fatigueIcons[fatigueLevel]}</span>
    `;
    
    // Add pulsing effect if gassed
    if (fatigueLevel === 'gassed') {
        pitchDisplay.classList.add('gassed-warning');
    } else {
        pitchDisplay.classList.remove('gassed-warning');
    }
}

/**
 * v4c-6: Start alternating pitcher/warmup display every 3 seconds
 */
function startPitcherDisplayAlternate() {
    // Clear any existing interval
    if (pitcherDisplayInterval) {
        clearInterval(pitcherDisplayInterval);
    }
    
    if (!isWarmingUp) return; // No need to alternate if not warming up
    
    showingWarmupInfo = false;
    pitcherDisplayInterval = setInterval(() => {
        if (!isWarmingUp) {
            // Stop alternating when warmup ends
            clearInterval(pitcherDisplayInterval);
            pitcherDisplayInterval = null;
            showingWarmupInfo = false;
            updatePitchDisplay();
            return;
        }
        showingWarmupInfo = !showingWarmupInfo;
        updatePitchDisplay();
    }, 3000);
}

/**
 * v4c-6: Stop alternating display
 */
function stopPitcherDisplayAlternate() {
    if (pitcherDisplayInterval) {
        clearInterval(pitcherDisplayInterval);
        pitcherDisplayInterval = null;
    }
    showingWarmupInfo = false;
    updatePitchDisplay();
}

/**
 * Update bullpen button visibility - NEW v3c-2, UPDATED v3c-3
 * v3c-3: Added tooltip that appears and fades on next click
 */
function updateBullpenButton() {
    const bullpenBtn = document.getElementById('bullpen-btn');
    const bullpenTooltip = document.getElementById('bullpen-tooltip');
    if (!bullpenBtn) return;
    
    if (isBullpenAvailable()) {
        const wasHidden = bullpenBtn.style.display === 'none';
        bullpenBtn.style.display = 'block';
        
        // Show tooltip when button first appears
        if (wasHidden && bullpenTooltip) {
            bullpenTooltip.classList.add('visible');
            bullpenTooltipVisible = true;
        }
        
        // Highlight if fatigued
        if (fatigueLevel === 'tired' || fatigueLevel === 'gassed') {
            bullpenBtn.classList.add('bullpen-needed');
        } else {
            bullpenBtn.classList.remove('bullpen-needed');
        }
    } else {
        bullpenBtn.style.display = 'none';
        if (bullpenTooltip) {
            bullpenTooltip.classList.remove('visible');
            bullpenTooltipVisible = false;
        }
    }
}

/**
 * Hide bullpen tooltip - called on any click when tooltip is visible
 */
function hideBullpenTooltip() {
    const bullpenTooltip = document.getElementById('bullpen-tooltip');
    if (bullpenTooltip && bullpenTooltipVisible) {
        bullpenTooltip.classList.remove('visible');
        bullpenTooltipVisible = false;
    }
}

function updateOptionsDisplay(options) {
    document.getElementById('right-side').className = 'choices-6';
    
    optionDivs.forEach((div, i) => {
        if (i < options.length) {
            div.style.display = 'flex';
            div.textContent = options[i];
            div.dataset.value = options[i];
            div.className = options[i] === 'WALK' ? 'option walk-option' : 'option';
        } else {
            div.style.display = 'none';
        }
    });
}

function updateBaseballProgress() {
    const container = document.getElementById('baseball-progress');
    if (!container) return;
    
    let html = '';
    for (let i = 0; i < OUTS_PER_INNING; i++) {
        html += i < outs 
            ? '<span class="baseball correct">⚾</span>'
            : '<span class="baseball empty">⚾</span>';
    }
    container.innerHTML = html;
    updateScoreboard();
}

function showMessage(text) {
    messageArea.innerHTML = text || '';
}

function disableWalkButton() {
    optionDivs.forEach(div => {
        if (div.dataset.value === 'WALK') {
            div.classList.add('disabled');
            div.textContent = '(in play)';
        }
    });
    
    // v3c-9: Also hide bullpen button during ball in play
    const bullpenBtn = document.getElementById('bullpen-btn');
    if (bullpenBtn) {
        bullpenBtn.style.display = 'none';
    }
}

/**
 * v3c-9: Re-enable bullpen button after play completes
 */
function enableBullpenButton() {
    updateBullpenButton(); // Let the normal logic handle visibility
}

function hideHintOverlay() {
    hintOverlay.classList.remove('visible');
    const hintTextEl = hintOverlay.querySelector('.hint-text');
    const correctAnswerEl = hintOverlay.querySelector('.correct-answer');
    if (hintTextEl) hintTextEl.innerHTML = '';
    if (correctAnswerEl) correctAnswerEl.innerHTML = '';
    optionDivs.forEach((div, i) => {
        if (i < NUM_CHOICES) div.style.display = 'flex';
    });
}

function showHintOverlay(hintMessage, correctAnswerText) {
    const hintTextEl = hintOverlay.querySelector('.hint-text');
    const correctAnswerEl = hintOverlay.querySelector('.correct-answer');
    
    if (correctAnswerEl) correctAnswerEl.innerHTML = correctAnswerText;
    if (hintTextEl) hintTextEl.innerHTML = formatClueText(hintMessage);
    
    hintOverlay.classList.add('visible');
    optionDivs.forEach(div => div.style.display = 'none');
}

/**
 * Build correct answer text - UPDATED v3c-2 (removed state for number/years)
 */
function buildCorrectAnswerText() {
    const p = currentPresident;
    
    if (p.name === "Cleveland") {
        return `${getFullPresidentName(p)}<br>#22 & #24 (1885-1889 & 1893-1897)`;
    }
    
    let line1 = getFullPresidentName(p);
    let line2 = `#${p.rank} (${p.term})`;
    
    // Only add state for STATE mode questions
    if (currentMode === 'state') {
        const ctx = contextByRank[p.rank];
        if (ctx && ctx.state) {
            line2 += ` — ${ctx.state}`;
        }
    }
    
    return `${line1}<br>${line2}`;
}

/**
 * Format clue text with natural line breaks
 * v3c-4: Improved logic for more natural breaks
 * Priority:
 * 1. If two sentences (period + space), break after first sentence
 * 2. If one sentence but long (>40 chars), find best break point near middle:
 *    - Prefer breaking after certain punctuation: semicolon, colon, dash
 *    - Then try comma nearest to middle
 *    - Then try space nearest to middle
 * 3. Short text stays on one line
 */
function formatClueText(text) {
    if (!text) return '';
    
    // If text is short enough, no break needed
    if (text.length <= 40) return text;
    
    // Priority 1: Break at sentence boundary (period + space, not abbreviations)
    // Look for ". " but not common abbreviations like "U.S. " or "Dr. "
    const sentenceMatch = text.match(/[^A-Z][.!?]\s+[A-Z]/);
    if (sentenceMatch) {
        const idx = text.indexOf(sentenceMatch[0]) + 2; // After the period and space
        return text.substring(0, idx).trim() + '<br>' + text.substring(idx).trim();
    }
    
    // Priority 2: For longer text, find best break point near middle
    const mid = Math.floor(text.length / 2);
    const searchRange = Math.floor(text.length * 0.3); // Look within 30% of middle
    
    // Try semicolon or colon first (strong break points)
    let bestBreak = findNearestBreak(text, mid, searchRange, /[;:]\s/);
    if (bestBreak > 0) {
        return text.substring(0, bestBreak + 1).trim() + '<br>' + text.substring(bestBreak + 1).trim();
    }
    
    // Try em-dash or double-hyphen
    bestBreak = findNearestBreak(text, mid, searchRange, /[—–]\s|--\s/);
    if (bestBreak > 0) {
        return text.substring(0, bestBreak + 1).trim() + '<br>' + text.substring(bestBreak + 1).trim();
    }
    
    // Try comma (but prefer one closer to middle, not the first one)
    bestBreak = findNearestComma(text, mid, searchRange);
    if (bestBreak > 0) {
        return text.substring(0, bestBreak + 1).trim() + '<br>' + text.substring(bestBreak + 1).trim();
    }
    
    // Last resort: break at space nearest to middle
    bestBreak = findNearestSpace(text, mid);
    if (bestBreak > 0) {
        return text.substring(0, bestBreak) + '<br>' + text.substring(bestBreak + 1);
    }
    
    return text;
}

/**
 * Find nearest match to a pattern within range of target position
 */
function findNearestBreak(text, targetPos, range, pattern) {
    const minPos = Math.max(0, targetPos - range);
    const maxPos = Math.min(text.length, targetPos + range);
    const substring = text.substring(minPos, maxPos);
    
    const match = substring.match(pattern);
    if (match) {
        return minPos + substring.indexOf(match[0]);
    }
    return -1;
}

/**
 * Find comma nearest to target position within range
 */
function findNearestComma(text, targetPos, range) {
    const minPos = Math.max(0, targetPos - range);
    const maxPos = Math.min(text.length, targetPos + range);
    
    let bestIdx = -1;
    let bestDist = Infinity;
    
    for (let i = minPos; i < maxPos; i++) {
        if (text[i] === ',' && text[i + 1] === ' ') {
            const dist = Math.abs(i - targetPos);
            if (dist < bestDist) {
                bestDist = dist;
                bestIdx = i;
            }
        }
    }
    return bestIdx;
}

/**
 * Find space nearest to target position
 */
function findNearestSpace(text, targetPos) {
    let before = text.lastIndexOf(' ', targetPos);
    let after = text.indexOf(' ', targetPos);
    
    if (before === -1) return after;
    if (after === -1) return before;
    
    return (targetPos - before) <= (after - targetPos) ? before : after;
}

// ============================================================================
// PITCHER SELECTION SCREEN - NEW v3c-2
// ============================================================================

function showPitcherSelectScreen() {
    pitcherSelectScreen = document.getElementById('pitcher-select-screen');
    if (!pitcherSelectScreen) return;
    
    // v3c-4: Sort by stamina descending (best pitchers first)
    const sortedPitchers = [...usaLineup]
        .map(presIdx => ({ presIdx, stamina: presidents[presIdx].stamina }))
        .sort((a, b) => b.stamina - a.stamina);
    
    let html = `
        <div class="pitcher-select-content">
            <h2>⚾ Select Your Starting Pitcher</h2>
            <p>Choose a pitcher from the ${homeTeam.name} roster:</p>
            <div class="pitcher-list">
    `;
    
    sortedPitchers.forEach(({ presIdx }) => {
        const p = presidents[presIdx];
        const quality = getPitcherQuality(p.stamina);
        
        // v3c-4: Show expected pitch count range based on stamina
        const expectedPitches = `~${Math.round(p.stamina * 0.9)}-${p.stamina}`;
        
        // v5c-10: Add ERA to pitcher selection
        const era = getPitcherERA(presIdx);
        
        // v5c-11: Get first and last name on separate lines
        const nameLines = getPresidentNameLines(p);
        
        html += `
            <div class="pitcher-option" data-president-index="${presIdx}">
                <div class="pitcher-name-block">
                    <span class="pitcher-first-name">${nameLines.firstName}</span>
                    <span class="pitcher-last-name">${nameLines.lastName}</span>
                </div>
                <div class="pitcher-stats-block">
                    <span class="pitcher-era">ERA ${era}</span>
                    <span class="pitcher-quality" style="color: ${quality.color}">${quality.label}</span>
                </div>
                <div class="pitcher-rating-block">
                    <span class="pitcher-stars">${quality.stars}</span>
                    <span class="pitcher-stamina">${expectedPitches} P</span>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    pitcherSelectScreen.innerHTML = html;
    
    // Add click handlers
    pitcherSelectScreen.querySelectorAll('.pitcher-option').forEach(option => {
        option.addEventListener('click', () => {
            const presIdx = parseInt(option.dataset.presidentIndex);
            selectStartingPitcher(presIdx);
        });
    });
    
    pitcherSelectScreen.style.display = 'flex';
}

function selectStartingPitcher(presidentIndex) {
    const lineupIdx = usaLineup.indexOf(presidentIndex);
    currentPitcherIndex = lineupIdx;
    currentPitcher = presidents[presidentIndex];
    startingPitcherIndex = presidentIndex; // v3c-3: Track starting pitcher
    pitchCount = 0;
    inningPitchCount = 0;
    pitchersUsed = [];
    fatigueLevel = 'fresh';
    
    console.log(`Starting pitcher: ${currentPitcher.name} (Stamina: ${currentPitcher.stamina})`);
    
    // v5c-10: Return to lineup screen to show updated Starting Pitchers card
    // and allow batting order adjustments
    pitcherSelectScreen.style.display = 'none';
    showLineupCardsWithPitcher();
}

// ============================================================================
// BULLPEN MODAL - NEW v3c-2, UPDATED v4c-1 for warmup system
// ============================================================================

/**
 * v4c-1: Start warming up a reliever in the bullpen
 */
function startWarmingUp(presidentIndex) {
    warmingUpPitcher = presidents[presidentIndex];
    warmingUpPitcherIndex = presidentIndex;
    warmupBattersFaced = 0;
    warmupRequired = Math.floor(Math.random() * 3) + 1; // 1-3 batters to warm up
    isWarmingUp = true;
    
    // v5c-6: Simplified log
    hideBullpenModal();
    
    // v4c-6: Start alternating display instead of showing message over question
    startPitcherDisplayAlternate();
    updatePitchDisplay();
}

/**
 * v4c-1: Check if a warmed-up reliever is ready
 */
function isRelieverWarmedUp() {
    return isWarmingUp && warmupBattersFaced >= warmupRequired;
}

/**
 * v4c-1: Get warmup status text
 * v5c-2: Shortened warmup message to prevent layout shifting
 * v5c-6: Changed "warming" to "warming up"
 */
function getWarmupStatusText() {
    if (!isWarmingUp) return '';
    if (warmupBattersFaced >= warmupRequired) {
        return `${getShortPresidentName(warmingUpPitcher)} READY 🔥`;
    }
    // v5c-6: Changed "warming" to "warming up"
    return `${getShortPresidentName(warmingUpPitcher)} warming up`;
}

/**
 * v4c-1: Bring in the warmed-up reliever
 * v5c-4: Added skipOptionRegen parameter for reliever decision flow
 */
function bringInWarmedUpReliever(skipOptionRegen = false) {
    if (!warmingUpPitcher) return;
    
    const bonus = isRelieverWarmedUp() ? 'fully warmed' : 'cold';
    // v5c-6: Simplified log
    
    // v5c-4: Pass skipOptionRegen to switchPitcher during decision flow
    switchPitcher(warmingUpPitcherIndex, isRelieverWarmedUp(), skipOptionRegen);
    
    // Reset warmup state
    isWarmingUp = false;
    warmingUpPitcher = null;
    warmingUpPitcherIndex = null;
    warmupBattersFaced = 0;
}

/**
 * v4c-1: Track that a batter has faced - advances warmup
 */
function advanceWarmup() {
    if (isWarmingUp) {
        warmupBattersFaced++;
        // v5c-6: Removed verbose warmup progress log
    }
}

function showBullpenModal() {
    bullpenModal = document.getElementById('bullpen-modal');
    if (!bullpenModal) return;
    
    // v3c-4: Sort relievers by stamina (best first)
    const relievers = getAvailableRelievers()
        .sort((a, b) => b.stamina - a.stamina);
    
    let html = `
        <div class="bullpen-content">
            <h2>📞 Call to Bullpen</h2>
            <p>Current pitcher: <strong>${currentPitcher.name}</strong> (${pitchCount} pitches, ${fatigueLevel})</p>
    `;
    
    // v4c-1: Show warmup status if someone is warming
    if (isWarmingUp) {
        const warmupStatus = getWarmupStatusText();
        const isReady = isRelieverWarmedUp();
        html += `
            <div class="warmup-status ${isReady ? 'ready' : 'warming'}">
                <span class="warmup-text">${warmupStatus}</span>
                <button id="bring-in-now-btn" class="bring-in-btn ${isReady ? 'ready' : ''}">${isReady ? '🔥 Bring in NOW!' : '❄️ Bring in Cold'}</button>
            </div>
        `;
    }
    
    html += `<p>Select a reliever${isWarmingUp ? ' to warm up' : ''}:</p>
            <div class="reliever-list">
    `;
    
    if (relievers.length === 0) {
        html += '<p class="no-relievers">No relievers available!</p>';
    } else {
        relievers.forEach(p => {
            const quality = getPitcherQuality(p.stamina);
            const presIdx = presidents.indexOf(p);
            const isCurrentlyWarming = warmingUpPitcherIndex === presIdx;
            
            html += `
                <div class="reliever-option ${isCurrentlyWarming ? 'warming' : ''}" data-president-index="${presIdx}">
                    <span class="reliever-name">${getShortPresidentName(p)}</span>
                    ${isCurrentlyWarming ? '<span class="warming-indicator">🔥</span>' : ''}
                    <span class="reliever-quality" style="color: ${quality.color}">${quality.label}</span>
                    <span class="reliever-stars">${quality.stars}</span>
                </div>
            `;
        });
    }
    
    html += `
            </div>
            <button id="cancel-bullpen-btn">Cancel</button>
        </div>
    `;
    
    bullpenModal.innerHTML = html;
    
    // Add click handlers
    bullpenModal.querySelectorAll('.reliever-option').forEach(option => {
        option.addEventListener('click', () => {
            const presIdx = parseInt(option.dataset.presidentIndex);
            
            // v4c-1: If warming up system active
            if (warmingUpPitcherIndex === presIdx) {
                // Clicking on currently warming pitcher - bring them in
                bringInWarmedUpReliever();
            } else if (isWarmingUp) {
                // Already warming someone - switch who's warming
                warmingUpPitcher = presidents[presIdx];
                warmingUpPitcherIndex = presIdx;
                warmupBattersFaced = 0;
                warmupRequired = Math.floor(Math.random() * 3) + 1;
                // v5c-6: Removed verbose log
                showBullpenModal(); // Refresh the modal
            } else {
                // First time calling bullpen - start warming
                startWarmingUp(presIdx);
            }
        });
    });
    
    // Handle "Bring in now" button if warming
    const bringInBtn = document.getElementById('bring-in-now-btn');
    if (bringInBtn) {
        bringInBtn.addEventListener('click', bringInWarmedUpReliever);
    }
    
    document.getElementById('cancel-bullpen-btn').addEventListener('click', hideBullpenModal);
    bullpenModal.addEventListener('click', (e) => {
        if (e.target === bullpenModal) hideBullpenModal();
    });
    
    bullpenModal.style.display = 'flex';
}

function hideBullpenModal() {
    if (bullpenModal) bullpenModal.style.display = 'none';
}

// ============================================================================
// LINEUP DISPLAY - UPDATED v3c-4, v4c-1
// ============================================================================

/**
 * v5c-9: Build Starting Pitchers preview card for lineup screen
 * v5c-10: Updated to show selected pitcher when pitcherSelected is true
 * v5c-19: Changed to horizontal layout - opponent left, VS middle, home right
 * v5c-20: Now contains Choose Pitcher / Start Game buttons
 * Shows head images, ERA, and quality rating
 */
function buildStartingPitchersCard(pitcherSelected = false) {
    // Find the probable starters (highest stamina from each lineup)
    // For opponent, pick a likely starter based on stamina
    let oppStarterIdx = oppLineup[0];
    let oppBestStamina = 0;
    oppLineup.forEach(idx => {
        const stamina = presidents[idx].stamina || 85;
        if (stamina > oppBestStamina) {
            oppBestStamina = stamina;
            oppStarterIdx = idx;
        }
    });
    const oppStarter = presidents[oppStarterIdx];
    const oppERA = getPitcherERA(oppStarterIdx);
    const oppQuality = getPitcherQuality(oppStarter.stamina || 85);
    
    // v5c-23: Removed lineup-card class since it's now inside center-column
    let html = `<div class="pitchers-preview">`;
    html += `<h3>Starting Pitchers</h3>`;
    
    // v5c-19: Horizontal layout - flex-direction: row
    html += `<div class="sp-matchup-horizontal">`;
    
    // Left side: Away starter (opponent)
    html += `<div class="sp-entry">`;
    html += `<div class="sp-team-label">${awayTeam.abbr}</div>`;
    html += `<div class="sp-head-container">`;
    html += `<img src="assets/heads/head-${oppStarter.rank}.png" class="sp-head" alt="${oppStarter.name}" onerror="this.style.display='none'">`;
    html += `</div>`;
    html += `<div class="sp-name">${getShortPresidentName(oppStarter)}</div>`;
    html += `<div class="sp-quality" style="color: ${oppQuality.color}">${oppQuality.stars}</div>`;
    html += `<div class="sp-era">ERA: ${oppERA}</div>`;
    html += `</div>`;
    
    // Center: VS divider
    html += `<div class="sp-vs-center">VS</div>`;
    
    // Right side: Home starter
    html += `<div class="sp-entry">`;
    html += `<div class="sp-team-label">${homeTeam.abbr}</div>`;
    
    if (pitcherSelected && startingPitcherIndex !== null) {
        const homeStarter = presidents[startingPitcherIndex];
        const homeERA = getPitcherERA(startingPitcherIndex);
        const homeQuality = getPitcherQuality(homeStarter.stamina || 85);
        
        html += `<div class="sp-head-container">`;
        html += `<img src="assets/heads/head-${homeStarter.rank}.png" class="sp-head" alt="${homeStarter.name}" onerror="this.style.display='none'">`;
        html += `</div>`;
        html += `<div class="sp-name">${getShortPresidentName(homeStarter)}</div>`;
        html += `<div class="sp-quality" style="color: ${homeQuality.color}">${homeQuality.stars}</div>`;
        html += `<div class="sp-era">ERA: ${homeERA}</div>`;
    } else {
        html += `<div class="sp-head-container">`;
        html += `<div class="sp-tbd-circle">?</div>`;
        html += `</div>`;
        html += `<div class="sp-name">TBD</div>`;
        html += `<div class="sp-quality" style="color: #888">★★★★★</div>`;
        html += `<div class="sp-era">Your Choice</div>`;
    }
    html += `</div>`;
    
    html += `</div>`; // Close sp-matchup-horizontal
    
    // v5c-20: Button in SP card instead of lineup cards
    if (!pitcherSelected) {
        html += `<button id="choose-pitcher-btn" class="sp-action-btn">Choose Starting Pitcher</button>`;
    } else {
        html += `<button id="start-game-btn" class="sp-action-btn sp-start-btn">▶ Start Game</button>`;
    }
    
    html += `</div>`; // Close pitchers-preview card
    
    return html;
}

/**
 * v4c-1: Presidential quotes about fighting/winning/teamwork
 * v5c-26: Added fullName for signature display
 */
const FIGHTING_QUOTES = [
    { name: "Washington", fullName: "George Washington", quote: "Perseverance and spirit have done wonders in all ages." },
    { name: "J. Adams", fullName: "John Adams", quote: "Every problem is an opportunity in disguise." },
    { name: "Jefferson", fullName: "Thomas Jefferson", quote: "Nothing can stop the man with the right mental attitude." },
    { name: "Madison", fullName: "James Madison", quote: "The advancement of liberty is the work of ages." },
    { name: "Jackson", fullName: "Andrew Jackson", quote: "One man with courage makes a majority." },
    { name: "Lincoln", fullName: "Abraham Lincoln", quote: "I am a slow walker, but I never walk back." },
    { name: "Grant", fullName: "Ulysses S. Grant", quote: "In every battle there comes a time when both sides consider themselves beaten." },
    { name: "T. Roosevelt", fullName: "Theodore Roosevelt", quote: "Do what you can, with what you have, where you are." },
    { name: "Coolidge", fullName: "Calvin Coolidge", quote: "Nothing in the world can take the place of persistence." },
    { name: "FDR", fullName: "Franklin D. Roosevelt", quote: "The only thing we have to fear is fear itself." },
    { name: "Hoover", fullName: "Herbert Hoover", quote: "Words without actions are the assassins of idealism." },
    { name: "Wilson", fullName: "Woodrow Wilson", quote: "I not only use all the brains I have, but all I can borrow." }
];

function getRandomQuoteFromLineup(lineup) {
    // Try to find a quote from a president in the lineup
    for (const idx of shuffle([...lineup])) {
        const p = presidents[idx];
        const quote = FIGHTING_QUOTES.find(q => q.name === p.name);
        if (quote) {
            // v5c-26: Use fullName with signature styling
            return `"${quote.quote}"<br><span class="quote-author quote-signature">— ${quote.fullName}</span>`;
        }
    }
    // Fallback to a random quote
    const fallback = FIGHTING_QUOTES[Math.floor(Math.random() * FIGHTING_QUOTES.length)];
    return `"${fallback.quote}"<br><span class="quote-author quote-signature">— ${fallback.fullName}</span>`;
}

function showLineupCards() {
    lineupScreen = document.getElementById('lineup-screen');
    if (!lineupScreen) return;
    
    // v3c-4: Initialize batting stats for all players
    initializeBattingStats();
    
    // v5c-9: Initialize ERA stats for all pitchers
    initializePitcherERAStats();
    
    // v5c-10: Build lineup screen (pitcher not yet selected)
    buildLineupScreen(false);
    
    lineupScreen.style.display = 'flex';
}

/**
 * v5c-10: Show lineup cards after pitcher is selected
 * Allows batting order adjustment before starting game
 */
function showLineupCardsWithPitcher() {
    lineupScreen = document.getElementById('lineup-screen');
    if (!lineupScreen) return;
    
    // Build lineup screen with pitcher selected
    buildLineupScreen(true);
    
    lineupScreen.style.display = 'flex';
}

/**
 * v5c-10: Build the lineup screen HTML
 * v5c-19: Removed instruction text, made draggable list match regular list styling
 * v5c-20: Removed opponent quote, moved buttons to SP card for symmetry
 * v5c-21: Both teams use same draggable list structure (opponent disabled)
 * v5c-22: Use same ☰ character for disabled handle to ensure identical sizing
 * v5c-23: Merged splash screen into lineup screen - greeting above SP card
 * @param {boolean} pitcherSelected - Whether starting pitcher has been chosen
 */
function buildLineupScreen(pitcherSelected) {
    let html = '<div class="lineup-cards">';
    
    // Away team lineup (opponent) - v5c-21: Same structure as home, but disabled
    html += `<div class="lineup-card away-lineup">`;
    html += `<h3>${awayTeam.name} <span class="team-label">(OPP)</span></h3>`;
    html += '<ol class="draggable-list disabled-list">';
    oppLineup.forEach((idx, pos) => {
        const p = presidents[idx];
        const ba = getBattingAverage(idx);
        html += `<li class="draggable-item disabled-item" data-president-index="${idx}" data-position="${pos}">`;
        html += `<span class="drag-handle disabled-handle">☰</span>`; // v5c-22: Same char, hidden by CSS
        html += `<span class="lineup-name">${getShortPresidentName(p)}</span>`;
        html += `<span class="lineup-ba">${ba}</span>`;
        html += `</li>`;
    });
    html += '</ol>';
    html += '</div>';
    
    // v5c-23: Center column with greeting + SP card
    html += '<div class="center-column">';
    
    // v5c-24: Greeting section with quote at bottom
    // v5c-25: Added bullet points and animated flags
    const quote = getRandomQuoteFromLineup([...oppLineup, ...usaLineup]);
    html += `<div class="lineup-greeting">`;
    html += `<div class="greeting-title-row">`;
    html += `<span class="flag-emoji animated-flag">🇺🇸</span>`;
    html += `<h1>Presidential Quiz</h1>`;
    html += `<span class="flag-emoji animated-flag">🇺🇸</span>`;
    html += `</div>`;
    html += `<p>Test your knowledge of U.S. Presidents!</p>`;
    html += `<ul class="greeting-bullets">`;
    html += `<li>Number ORDER of POTUS</li>`;
    html += `<li>Term Years</li>`;
    html += `<li>...and more!</li>`;
    html += `</ul>`;
    html += `<p class="greeting-subtitle">Pitch a full 9-inning game against the opposing lineup.</p>`;
    html += `<div class="greeting-quote">${quote}</div>`;
    html += `</div>`;
    
    // Starting Pitchers Preview Card
    html += buildStartingPitchersCard(pitcherSelected);
    
    html += '</div>'; // Close center-column
    
    // Home team lineup (our team) - v5c-21: Always draggable structure
    html += `<div class="lineup-card home-lineup">`;
    html += `<h3>${homeTeam.name} <span class="team-label">(YOU)</span></h3>`;
    
    // v5c-21: Always use draggable list structure
    html += '<ol id="draggable-lineup" class="draggable-list">';
    usaLineup.forEach((idx, pos) => {
        const p = presidents[idx];
        const ba = getBattingAverage(idx);
        html += `<li class="draggable-item" data-president-index="${idx}" data-position="${pos}">`;
        html += `<span class="drag-handle">☰</span>`;
        html += `<span class="lineup-name">${getShortPresidentName(p)}</span>`;
        html += `<span class="lineup-ba">${ba}</span>`;
        html += `</li>`;
    });
    html += '</ol>';
    html += '</div>';
    
    html += '</div>';
    
    lineupScreen.innerHTML = html;
    
    // v5c-20: Buttons are now in SP card
    // v5c-21: Always initialize drag-and-drop for home team
    if (pitcherSelected) {
        document.getElementById('start-game-btn').addEventListener('click', () => {
            lineupScreen.style.display = 'none';
            startNewInning();
        });
    } else {
        document.getElementById('choose-pitcher-btn').addEventListener('click', () => {
            lineupScreen.style.display = 'none';
            showPitcherSelectScreen();
        });
    }
    
    // Always initialize drag-and-drop
    initDragAndDrop();
}

/**
 * v5c-10: Initialize touch-friendly drag-and-drop for batting order
 */
function initDragAndDrop() {
    const list = document.getElementById('draggable-lineup');
    if (!list) return;
    
    let draggedItem = null;
    let draggedIndex = -1;
    let placeholder = null;
    let touchStartY = 0;
    let touchCurrentY = 0;
    let itemHeight = 0;
    let listRect = null;
    let items = [];
    
    // Create placeholder element
    function createPlaceholder() {
        placeholder = document.createElement('li');
        placeholder.className = 'drag-placeholder';
        return placeholder;
    }
    
    // Get all current items
    function refreshItems() {
        items = Array.from(list.querySelectorAll('.draggable-item'));
    }
    
    // Find item at Y position
    function getItemAtY(y) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item === draggedItem) continue;
            const rect = item.getBoundingClientRect();
            const midY = rect.top + rect.height / 2;
            if (y < midY) {
                return { item, index: i, position: 'before' };
            }
        }
        // After all items
        const lastItem = items[items.length - 1];
        if (lastItem && lastItem !== draggedItem) {
            return { item: lastItem, index: items.length - 1, position: 'after' };
        }
        return null;
    }
    
    // Handle touch start on drag handle
    function handleTouchStart(e) {
        const handle = e.target.closest('.drag-handle');
        if (!handle) return;
        
        e.preventDefault();
        
        draggedItem = handle.closest('.draggable-item');
        if (!draggedItem) return;
        
        refreshItems();
        draggedIndex = items.indexOf(draggedItem);
        
        const touch = e.touches[0];
        touchStartY = touch.clientY;
        touchCurrentY = touchStartY;
        
        const rect = draggedItem.getBoundingClientRect();
        itemHeight = rect.height;
        listRect = list.getBoundingClientRect();
        
        // Style the dragged item
        draggedItem.classList.add('dragging');
        draggedItem.style.position = 'fixed';
        draggedItem.style.left = rect.left + 'px';
        draggedItem.style.top = rect.top + 'px';
        draggedItem.style.width = rect.width + 'px';
        draggedItem.style.zIndex = '1000';
        
        // Insert placeholder
        placeholder = createPlaceholder();
        placeholder.style.height = itemHeight + 'px';
        draggedItem.parentNode.insertBefore(placeholder, draggedItem.nextSibling);
        
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    }
    
    // Handle touch move
    function handleTouchMove(e) {
        if (!draggedItem) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        touchCurrentY = touch.clientY;
        
        // Move the dragged item
        const deltaY = touchCurrentY - touchStartY;
        const originalTop = listRect.top + (draggedIndex * itemHeight);
        draggedItem.style.top = (originalTop + deltaY) + 'px';
        
        // Find where to place placeholder
        const target = getItemAtY(touchCurrentY);
        if (target && target.item !== placeholder.previousElementSibling && target.item !== placeholder.nextElementSibling) {
            if (target.position === 'before') {
                list.insertBefore(placeholder, target.item);
            } else {
                list.insertBefore(placeholder, target.item.nextSibling);
            }
        }
    }
    
    // Handle touch end
    function handleTouchEnd(e) {
        if (!draggedItem) return;
        
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        
        // Get the new position
        refreshItems();
        const placeholderIndex = Array.from(list.children).indexOf(placeholder);
        
        // Remove placeholder
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }
        
        // Reset dragged item styles
        draggedItem.classList.remove('dragging');
        draggedItem.style.position = '';
        draggedItem.style.left = '';
        draggedItem.style.top = '';
        draggedItem.style.width = '';
        draggedItem.style.zIndex = '';
        
        // Move item to new position in DOM
        const newIndex = placeholderIndex > draggedIndex ? placeholderIndex - 1 : placeholderIndex;
        if (newIndex !== draggedIndex && newIndex >= 0) {
            // Animate the reorder
            animateReorder(draggedItem, newIndex);
        }
        
        draggedItem = null;
        draggedIndex = -1;
        placeholder = null;
    }
    
    // Animate reorder and update usaLineup
    function animateReorder(item, newIndex) {
        refreshItems();
        const currentIndex = items.indexOf(item);
        
        if (currentIndex === newIndex) return;
        
        // Update the usaLineup array
        const presIdx = parseInt(item.dataset.presidentIndex);
        const oldPos = usaLineup.indexOf(presIdx);
        
        // Remove from old position
        usaLineup.splice(oldPos, 1);
        
        // Insert at new position
        usaLineup.splice(newIndex, 0, presIdx);
        
        console.log('New batting order:', usaLineup.map(idx => presidents[idx].name));
        
        // Rebuild the list with animation
        rebuildListWithAnimation();
    }
    
    // Rebuild list items with smooth animation
    function rebuildListWithAnimation() {
        const listItems = list.querySelectorAll('.draggable-item');
        
        // Store current positions
        const positions = [];
        listItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            positions.push({ item, top: rect.top, presIdx: item.dataset.presidentIndex });
        });
        
        // Clear and rebuild
        list.innerHTML = '';
        usaLineup.forEach((idx, pos) => {
            const p = presidents[idx];
            const ba = getBattingAverage(idx);
            const li = document.createElement('li');
            li.className = 'draggable-item';
            li.dataset.presidentIndex = idx;
            li.dataset.position = pos;
            li.innerHTML = `
                <span class="drag-handle">☰</span>
                <span class="lineup-name">${getShortPresidentName(p)}</span>
                <span class="lineup-ba">${ba}</span>
            `;
            list.appendChild(li);
        });
        
        // Animate from old positions
        const newItems = list.querySelectorAll('.draggable-item');
        newItems.forEach((item, i) => {
            const newRect = item.getBoundingClientRect();
            const oldItem = positions.find(p => p.presIdx === item.dataset.presidentIndex);
            if (oldItem) {
                const deltaY = oldItem.top - newRect.top;
                if (Math.abs(deltaY) > 1) {
                    item.style.transform = `translateY(${deltaY}px)`;
                    item.style.transition = 'none';
                    requestAnimationFrame(() => {
                        item.style.transition = 'transform 0.3s ease-out';
                        item.style.transform = 'translateY(0)';
                    });
                }
            }
        });
        
        // Re-add ALL handlers (both touch and mouse)
        addAllDragHandlers();
    }
    
    // Add all drag handlers (touch and mouse) to drag handles
    function addAllDragHandlers() {
        list.querySelectorAll('.drag-handle').forEach(handle => {
            // Remove existing listeners to prevent duplicates
            handle.replaceWith(handle.cloneNode(true));
        });
        // Re-query after replacing
        list.querySelectorAll('.drag-handle').forEach(handle => {
            handle.addEventListener('touchstart', handleTouchStart, { passive: false });
            handle.addEventListener('mousedown', handleMouseDown);
        });
    }
    
    // Add touch handlers to all drag handles (legacy - now using addAllDragHandlers)
    function addTouchHandlers() {
        addAllDragHandlers();
    }
    
    // Also support mouse drag for desktop testing
    function handleMouseDown(e) {
        const handle = e.target.closest('.drag-handle');
        if (!handle) return;
        
        e.preventDefault();
        
        draggedItem = handle.closest('.draggable-item');
        if (!draggedItem) return;
        
        refreshItems();
        draggedIndex = items.indexOf(draggedItem);
        
        touchStartY = e.clientY;
        touchCurrentY = touchStartY;
        
        const rect = draggedItem.getBoundingClientRect();
        itemHeight = rect.height;
        listRect = list.getBoundingClientRect();
        
        draggedItem.classList.add('dragging');
        draggedItem.style.position = 'fixed';
        draggedItem.style.left = rect.left + 'px';
        draggedItem.style.top = rect.top + 'px';
        draggedItem.style.width = rect.width + 'px';
        draggedItem.style.zIndex = '1000';
        
        placeholder = createPlaceholder();
        placeholder.style.height = itemHeight + 'px';
        draggedItem.parentNode.insertBefore(placeholder, draggedItem.nextSibling);
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    
    function handleMouseMove(e) {
        if (!draggedItem) return;
        e.preventDefault();
        
        touchCurrentY = e.clientY;
        
        const deltaY = touchCurrentY - touchStartY;
        const originalTop = listRect.top + (draggedIndex * itemHeight);
        draggedItem.style.top = (originalTop + deltaY) + 'px';
        
        const target = getItemAtY(touchCurrentY);
        if (target && target.item !== placeholder.previousElementSibling && target.item !== placeholder.nextElementSibling) {
            if (target.position === 'before') {
                list.insertBefore(placeholder, target.item);
            } else {
                list.insertBefore(placeholder, target.item.nextSibling);
            }
        }
    }
    
    function handleMouseUp(e) {
        if (!draggedItem) return;
        
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        
        refreshItems();
        const placeholderIndex = Array.from(list.children).indexOf(placeholder);
        
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.removeChild(placeholder);
        }
        
        draggedItem.classList.remove('dragging');
        draggedItem.style.position = '';
        draggedItem.style.left = '';
        draggedItem.style.top = '';
        draggedItem.style.width = '';
        draggedItem.style.zIndex = '';
        
        const newIndex = placeholderIndex > draggedIndex ? placeholderIndex - 1 : placeholderIndex;
        if (newIndex !== draggedIndex && newIndex >= 0) {
            animateReorder(draggedItem, newIndex);
        }
        
        draggedItem = null;
        draggedIndex = -1;
        placeholder = null;
    }
    
    // Initial setup
    addTouchHandlers();
    list.querySelectorAll('.drag-handle').forEach(handle => {
        handle.addEventListener('mousedown', handleMouseDown);
    });
}

// ============================================================================
// SCREEN MANAGEMENT
// ============================================================================

function hideAllScreens() {
    if (splashScreen) splashScreen.style.display = 'none';
    if (gameArea) gameArea.style.display = 'none';
    if (settingsScreen) settingsScreen.style.display = 'none';
    if (inningCompleteScreen) inningCompleteScreen.style.display = 'none';
    if (finalScreen) finalScreen.style.display = 'none';
    if (highScoresModal) highScoresModal.style.display = 'none';
    if (scoreSubmission) scoreSubmission.style.display = 'none';
    if (lineupScreen) lineupScreen.style.display = 'none';
    if (pitcherSelectScreen) pitcherSelectScreen.style.display = 'none';
    if (bullpenModal) bullpenModal.style.display = 'none';
}

function showSettings() {
    settingsScreen.style.display = 'flex';
}

function hideSettings() {
    settingsScreen.style.display = 'none';
}

/**
 * Show inning complete screen with animated bottom half
 * v3c-6: Redesigned layout with animated offensive playback
 * v5c-9: Added BA to Up Next, pitcher ER/ERA
 */
function showInningComplete() {
    const content = document.getElementById('inning-complete-content');
    
    // v4c-6: Two-column layout, no title, aligned edges
    let html = '<div class="recap-two-column">';
    
    // LEFT COLUMN: Scoreboard and Top Inning
    html += '<div class="recap-left-col">';
    
    // SCOREBOARD - at top
    html += `<div id="recap-scoreboard">${buildLineScore()}</div>`;
    
    // TOP OF INNING SUMMARY - aligned with Bottom section
    // v5c-9: Added pitcher ER/ERA
    html += `<div class="recap-section top-recap">`;
    html += `<div class="recap-header">Top ${inning}:</div>`;
    
    // v5c-9: Show pitcher stats (ER and ERA for the game)
    const pitcherName = currentPitcher ? getShortPresidentName(currentPitcher) : '???';
    // currentPitcherIndex is lineup index, need president index for ERA lookup
    // startingPitcherIndex IS already the president index
    const pitcherPresIdx = currentPitcherIndex !== null ? usaLineup[currentPitcherIndex] : startingPitcherIndex;
    const pitcherER = currentPitcherER;
    const pitcherERAStr = pitcherERAStats[pitcherPresIdx] ? pitcherERAStats[pitcherPresIdx].era.toFixed(2) : '-.--';
    html += `<div class="pitcher-stats-line">Pitcher: ${pitcherName} | ER: ${pitcherER} | ERA: ${pitcherERAStr}</div>`;
    
    const hitKeys = Object.keys(hitsThisInning);
    let missedText = '';
    
    if (hitKeys.length === 0 && walksThisInning === 0) {
        const totalHits = inningScores.reduce((sum, i) => sum + i.hits, 0);
        missedText = totalHits === 0 ? getPerfectInningText(inning) : 'none';
    } else {
        const parts = [];
        hitKeys.forEach(presIndex => {
            const pres = presidents[presIndex];
            const hitList = hitsThisInning[presIndex];
            const hitTypes = hitList.map(h => formatHitType(h)).join(', ');
            // v3c-8: Added jersey number (#rank)
            parts.push(`<span class="jersey-num">#${pres.rank}</span> ${getShortPresidentName(pres)} (${hitTypes})`);
        });
        if (walksThisInning > 0) {
            parts.push(`${walksThisInning} BB`);
        }
        missedText = parts.join('; ');
    }
    
    html += `<div class="questions-missed">Questions missed: ${missedText}</div>`;
    html += `</div>`;
    
    // v4c-5: UP NEXT - styled to match the button size symmetrically
    // v5c-9: Added BA after each batter name
    // v5c-15: Changed from div to button for consistent alignment with other button
    const upNext = getUpNextBatters(3);
    const upNextNamesWithBA = upNext.map(p => {
        const presIdx = presidents.indexOf(p);
        const ba = getBattingAverage(presIdx);
        return `${getShortPresidentName(p)} (${ba})`;
    }).join(', ');
    html += `<button class="up-next recap-action-btn" disabled>Next Up: ${upNextNamesWithBA}</button>`;
    
    html += '</div>'; // End left column
    
    // RIGHT COLUMN: Bottom Inning Animation and Continue Button
    html += '<div class="recap-right-col">';
    
    // BOTTOM OF INNING - ANIMATED SECTION
    html += `<div class="recap-section bottom-recap">`;
    
    // v4c-1: Header row with Runs, now on separate lines for pitcher and stats
    html += `<div class="recap-header-row">`;
    html += `<span class="recap-header">Bottom ${inning}:</span>`;
    html += `</div>`;
    
    // v4c-1: Pitcher on its own line
    // v5c-9: Added ER and ERA for opponent pitcher
    const oppPitcherName = lastHomeInningResults?.oppPitcherName || '???';
    const oppPitcherER = lastHomeInningResults?.oppPitcherER || 0;
    const oppPitcherERA = lastHomeInningResults?.oppPitcherERA || '-.--';
    html += `<div class="opp-pitcher-line">Pitching: <span id="anim-pitcher">${oppPitcherName}</span> | ER: ${oppPitcherER} | ERA: ${oppPitcherERA}</div>`;
    
    // v4c-1: Stats line - Runs, Hits, LOB
    const bottomHits = lastHomeInningResults?.hits || 0;
    const bottomLOB = lastHomeInningResults?.lob || 0;
    html += `<div class="bottom-stats-line">`;
    html += `<span>Runs: <span id="anim-runs" class="stat-value">0</span></span>`;
    html += `<span>Hits: <span id="anim-hits" class="stat-value">${bottomHits}</span></span>`;
    html += `<span>LOB: <span id="anim-lob" class="stat-value">${bottomLOB}</span></span>`;
    html += `</div>`;
    
    // Bases and batter display side by side
    html += `<div class="bottom-animation-area">`;
    html += `<div class="animation-left">`;
    html += `<div id="anim-bases-container">`;
    html += `<div class="anim-bases-diamond">`;
    html += `<div class="anim-base anim-base-2"></div>`;
    html += `<div class="anim-base anim-base-3"></div>`;
    html += `<div class="anim-base anim-base-1"></div>`;
    html += `</div>`;
    html += `<div id="anim-outs">0 out</div>`;
    html += `</div>`;
    html += `</div>`;
    
    // Scrolling batter list (max 4 visible)
    html += `<div class="animation-right">`;
    html += `<div id="batter-scroll-container">`;
    html += `<div id="batter-list"></div>`;
    html += `</div>`;
    html += `</div>`; // Close animation-right
    html += `</div>`; // Close bottom-animation-area
    html += `</div>`; // Close bottom-recap
    
    // v4c-5: BUTTON - same size as Up Next box
    html += `<button id="next-inning-btn" class="recap-action-btn">Continue</button>`;
    
    html += '</div>'; // End right column
    html += '</div>'; // End two-column container
    
    content.innerHTML = html;
    
    // Set up button handler
    const nextBtn = document.getElementById('next-inning-btn');
    nextBtn.disabled = true; // Disable until animation completes
    nextBtn.style.opacity = '0.5';
    
    // v5c-1: Check for walk-off win OR regular game complete
    if (isWalkOffWin() || checkGameComplete()) {
        nextBtn.textContent = 'View Final Results';
        nextBtn.onclick = showFinalResults;
    } else {
        // v4c-5: Changed from "Continue to Xth" to "Start Xth Inning" (clearer, avoids confusion with 2nd base)
        nextBtn.textContent = `Start ${getOrdinalInning(inning + 1)} Inning`;
        nextBtn.onclick = () => {
            inning++;
            inningCompleteScreen.style.display = 'none';
            startNewInning();
        };
    }
    
    inningCompleteScreen.style.display = 'flex';
    
    // Start the animation after a brief delay
    setTimeout(() => {
        animateBottomHalf();
    }, 500);
}

/**
 * Animate the bottom half play-by-play
 */
function animateBottomHalf() {
    const plays = lastHomeInningResults?.playByPlay || [];
    const batterList = document.getElementById('batter-list');
    const animRuns = document.getElementById('anim-runs');
    const animOuts = document.getElementById('anim-outs');
    const animPitcher = document.getElementById('anim-pitcher');
    let playIndex = 0;
    const DELAY_PER_PLAY = 800; // ms between plays
    const MAX_VISIBLE = 4;
    
    function showNextPlay() {
        if (playIndex >= plays.length) {
            // Animation complete - enable button
            const nextBtn = document.getElementById('next-inning-btn');
            if (nextBtn) {
                nextBtn.disabled = false;
                nextBtn.style.opacity = '1';
            }
            return;
        }
        
        const play = plays[playIndex];
        
        // v3c-9: Handle skipped inning (walk-off win)
        if (play.isSkipped) {
            const skipLine = document.createElement('div');
            skipLine.className = 'batter-line skip-message';
            skipLine.innerHTML = `<em>${play.message}</em>`;
            batterList.appendChild(skipLine);
            playIndex++;
            setTimeout(showNextPlay, DELAY_PER_PLAY);
            return;
        }
        
        // v3c-9: Handle ghost runner
        if (play.isGhostRunner) {
            const ghostLine = document.createElement('div');
            ghostLine.className = 'batter-line ghost-runner';
            ghostLine.innerHTML = `<em>👻 ${play.message}</em>`;
            batterList.appendChild(ghostLine);
            updateAnimBases(play.basesAfter);
            playIndex++;
            setTimeout(showNextPlay, DELAY_PER_PLAY);
            return;
        }
        
        // Handle pitching change
        if (play.isPitchingChange) {
            if (animPitcher) animPitcher.textContent = play.newPitcher;
            playIndex++;
            setTimeout(showNextPlay, DELAY_PER_PLAY / 2);
            return;
        }
        
        // v5c-7: Handle walk-off win entry
        if (play.isWalkOff) {
            const walkOffLine = document.createElement('div');
            walkOffLine.className = 'batter-line walkoff';
            walkOffLine.innerHTML = `<span class="walkoff-text">${play.message}</span>`;
            batterList.appendChild(walkOffLine);
            
            // Update runs one final time
            if (animRuns) {
                animRuns.textContent = play.totalRuns;
            }
            
            playIndex++;
            setTimeout(showNextPlay, DELAY_PER_PLAY);
            return;
        }
        
        // Create batter line element
        const batterLine = document.createElement('div');
        batterLine.className = 'batter-line';
        if (play.isOut) {
            batterLine.classList.add('out');
        } else if (play.result && play.result.includes('HOME RUN')) {
            batterLine.classList.add('homerun');
        } else {
            batterLine.classList.add('hit');
        }
        
        // v3c-8: Include jersey number (#rank) before batter name
        let lineText = `<span class="jersey-num">#${play.batterRank}</span> ${play.batterName}: ${play.result}`;
        if (play.runsScored > 0) {
            lineText += ` <span class="runs-scored">(${play.runsScored})</span>`;
        }
        batterLine.innerHTML = lineText;
        
        // Add to list
        batterList.appendChild(batterLine);
        
        // Scroll if needed (keep max 4 visible)
        const lines = batterList.querySelectorAll('.batter-line');
        if (lines.length > MAX_VISIBLE) {
            // Scroll up - remove oldest or just scroll
            batterList.style.transform = `translateY(-${(lines.length - MAX_VISIBLE) * 28}px)`;
        }
        
        // Update bases display
        updateAnimBases(play.basesAfter);
        
        // Update outs
        if (animOuts) {
            animOuts.textContent = `${play.outs} out${play.outs !== 1 ? 's' : ''}`;
        }
        
        // Update runs
        if (animRuns) {
            animRuns.textContent = play.totalRuns;
        }
        
        playIndex++;
        setTimeout(showNextPlay, DELAY_PER_PLAY);
    }
    
    // Start animation
    showNextPlay();
}

/**
 * Update the animated bases display
 */
function updateAnimBases(bases) {
    const base1 = document.querySelector('.anim-base-1');
    const base2 = document.querySelector('.anim-base-2');
    const base3 = document.querySelector('.anim-base-3');
    
    if (base1) base1.classList.toggle('occupied', bases[0]);
    if (base2) base2.classList.toggle('occupied', bases[1]);
    if (base3) base3.classList.toggle('occupied', bases[2]);
}

function getOrdinalInning(num) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

function buildLineScore() {
    const numInnings = Math.max(inningScores.length, 9);
    
    // v5c-2: Wrap in scrollable container for extra innings
    let html = '<div class="line-score-wrapper"><div class="line-score">';
    
    // v5c-2: Calculate dynamic grid columns based on number of innings
    const inningCols = `repeat(${numInnings}, 18px)`;
    const gridStyle = `grid-template-columns: 32px ${inningCols} 22px 22px 26px;`;
    
    // v3c-7: Added LOB column
    html += `<div class="line-score-row header" style="${gridStyle}"><span class="team-name"></span>`;
    for (let i = 1; i <= numInnings; i++) {
        html += `<span class="inning-num">${i}</span>`;
    }
    html += '<span class="total-label">R</span><span class="total-label">H</span><span class="total-label">LOB</span></div>';
    
    html += `<div class="line-score-row opponent" style="${gridStyle}"><span class="team-name">${awayTeam ? awayTeam.abbr : 'AWY'}</span>`;
    let awayTotal = 0, awayHits = 0;
    for (let i = 0; i < numInnings; i++) {
        if (i < inningScores.length) {
            html += `<span class="inning-score">${inningScores[i].awayRuns}</span>`;
            awayTotal += inningScores[i].awayRuns;
            awayHits += inningScores[i].hits;
        } else {
            html += '<span class="inning-score">-</span>';
        }
    }
    html += `<span class="total-score">${awayTotal}</span>`;
    html += `<span class="total-score">${awayHits}</span>`;
    html += `<span class="total-score">${awayLOB}</span></div>`; // v3c-7: LOB
    
    html += `<div class="line-score-row home" style="${gridStyle}"><span class="team-name">${homeTeam ? homeTeam.abbr : 'HME'}</span>`;
    let homeTotal = 0;
    let homeHits = 0; // v3c-5: Track home team hits
    for (let i = 0; i < numInnings; i++) {
        if (i < inningScores.length) {
            // v4c-1 BUG FIX: Don't add 'X' to totals - it means the inning was skipped
            const homeRunsVal = inningScores[i].homeRuns;
            html += `<span class="inning-score">${homeRunsVal}</span>`;
            // Only add numeric values to totals
            if (typeof homeRunsVal === 'number') {
                homeTotal += homeRunsVal;
            }
            homeHits += inningScores[i].homeHits || 0; // v3c-5
        } else {
            html += '<span class="inning-score">-</span>';
        }
    }
    html += `<span class="total-score">${homeTotal}</span>`;
    html += `<span class="total-score">${homeHits}</span>`;
    html += `<span class="total-score">${homeLOB}</span></div>`; // v3c-7: LOB
    
    html += '</div></div>'; // Close line-score and wrapper
    return html;
}

function getPerfectInningText(inn) {
    // v3c-4: Restored escalating "none" text for no-hitter in progress
    const classes = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8'];
    const texts = ['none', 'none', 'none', 'None', 'NONE', 'NONE', 'NONE', 'NONE'];
    const idx = Math.min(inn - 1, 7);
    return `<span class="perfect-none ${classes[idx]}">${texts[idx]}</span>`;
}

function showFinalResults() {
    const totalTime = Math.round((Date.now() - timerStart) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    
    const totalHits = inningScores.reduce((sum, i) => sum + i.hits, 0);
    const totalWalks = inningScores.reduce((sum, i) => sum + (i.walks || 0), 0);
    const totalPitches = inningScores.reduce((sum, i) => sum + (i.pitches || 0), 0);
    
    // v5c-9: Boxscore in left column
    document.getElementById('final-line-score').innerHTML = buildLineScore();
    
    // v5c-9: Add pitching summary to left column
    const pitchingSummaryEl = document.getElementById('final-pitching-summary');
    if (pitchingSummaryEl) {
        pitchingSummaryEl.innerHTML = buildFinalPitchingSummary();
    }
    
    // v3c-4: Show YOUR score first (home team is YOU)
    document.getElementById('final-score').textContent = `${homeTotalRuns}-${awayTotalRuns}`;
    
    const gradeEl = document.getElementById('final-grade');
    const resultEl = document.getElementById('final-result');
    
    // v3c-4: Calculate accuracy percentage
    const accuracy = totalQuestionsAsked > 0 
        ? ((totalCorrectFirstTry / totalQuestionsAsked) * 100).toFixed(1)
        : '0.0';
    
    // v3c-4: Determine game result message
    let resultMessage = '';
    let specialAchievement = '';
    
    if (homeTotalRuns > awayTotalRuns) {
        resultMessage = '🎉 You win! 🎉';
    } else if (homeTotalRuns < awayTotalRuns) {
        resultMessage = 'Better luck next time.';
    } else {
        resultMessage = 'Tie game!';
    }
    
    // v4c-6: Count pitchers used (starting pitcher + relievers)
    const numPitchersUsed = pitchersUsed.length + 1; // +1 for current pitcher
    // v4c-7 FIX: startingPitcherIndex IS the president index, not lineup index
    const starterName = presidents[startingPitcherIndex] 
        ? getShortPresidentName(presidents[startingPitcherIndex])
        : 'Unknown';
    const isPerfectGame = totalHits === 0 && totalWalks === 0 && awayTotalRuns === 0;
    const isNoHitter = totalHits === 0 && awayTotalRuns === 0;
    const isShutout = awayTotalRuns === 0;
    
    // v4c-6: Check for special achievements with pitcher-specific messages
    if (isPerfectGame) {
        if (numPitchersUsed === 1) {
            specialAchievement = `⚾ ${starterName} hurls PERFECT GAME!!! ⚾`;
        } else {
            specialAchievement = `⚾ ${homeTeam.name} combines for PERFECT GAME!!! ⚾`;
        }
        gradeEl.className = 'final-grade perfect-game';
    } else if (isNoHitter) {
        if (numPitchersUsed === 1) {
            specialAchievement = `🚫 ${starterName} throws NO-HITTER!! 🚫`;
        } else {
            specialAchievement = `🚫 ${homeTeam.name} combines for NO-HITTER!! 🚫`;
        }
        gradeEl.className = 'final-grade perfect-game';
    } else if (isShutout) {
        if (numPitchersUsed === 1) {
            specialAchievement = `🛡️ ${starterName} pitches SHUTOUT! 🛡️`;
        } else {
            specialAchievement = `🛡️ ${homeTeam.name} combines for SHUTOUT! 🛡️`;
        }
        gradeEl.className = 'final-grade grade-a';
    } else {
        gradeEl.className = 'final-grade';
    }
    
    // v3c-4: Display accuracy percentage instead of letter grade
    gradeEl.textContent = `${accuracy}% accuracy`;
    
    // Update result element (create if doesn't exist)
    if (resultEl) {
        resultEl.innerHTML = specialAchievement 
            ? `<div class="special-achievement">${specialAchievement}</div><div class="result-message">${resultMessage}</div>`
            : `<div class="result-message">${resultMessage}</div>`;
    }
    
    // Add pitching summary (moved to buildFinalPitchingSummary)
    const pitchSummary = document.getElementById('pitch-summary');
    if (pitchSummary) {
        pitchSummary.innerHTML = `Total Pitches: ${totalPitches} | Pitchers Used: ${numPitchersUsed}`;
    }
    
    hideAllScreens();
    finalScreen.style.display = 'flex';
    
    checkHighScore();
}

/**
 * v5c-9: Build pitching summary for final results screen
 */
function buildFinalPitchingSummary() {
    let html = '<div class="final-pitching-box">';
    html += '<div class="pitching-title">Pitching Summary</div>';
    
    // Starting pitcher stats
    const starterStats = pitcherERAStats[startingPitcherIndex];
    const starterName = presidents[startingPitcherIndex] 
        ? getShortPresidentName(presidents[startingPitcherIndex])
        : 'Unknown';
    
    html += `<div class="pitcher-line">${starterName} (SP): ER ${currentPitcherER}, ERA ${starterStats ? starterStats.era.toFixed(2) : '-.--'}</div>`;
    
    // Relief pitchers if any
    if (pitchersUsed.length > 0) {
        pitchersUsed.forEach(presIdx => {
            const p = presidents[presIdx];
            const stats = pitcherERAStats[presIdx];
            // Note: We'd need to track ER per reliever separately for full accuracy
            html += `<div class="pitcher-line">${getShortPresidentName(p)} (RP): ERA ${stats ? stats.era.toFixed(2) : '-.--'}</div>`;
        });
    }
    
    html += '</div>';
    return html;
}

function checkHighScore() {
    const scores = JSON.parse(localStorage.getItem('quiz-leaderboard') || '[]');
    const runsAllowed = awayTotalRuns;
    const totalHits = inningScores.reduce((sum, i) => sum + i.hits, 0);
    
    const isHighScore = scores.length < 10 || 
        scores.some(s => runsAllowed < s.runs || (runsAllowed === s.runs && totalHits < s.hits));
    
    if (isHighScore) {
        scoreSubmission.style.display = 'flex';
        document.getElementById('initials-input').value = '';
        document.getElementById('initials-input').focus();
    }
}

function submitScore() {
    const initials = document.getElementById('initials-input').value.toUpperCase().substring(0, 3) || 'AAA';
    const totalHits = inningScores.reduce((sum, i) => sum + i.hits, 0);
    const totalWalks = inningScores.reduce((sum, i) => sum + (i.walks || 0), 0);
    
    const scores = JSON.parse(localStorage.getItem('quiz-leaderboard') || '[]');
    scores.push({ 
        initials, 
        runs: awayTotalRuns, 
        hits: totalHits,
        walks: totalWalks,
        innings: inning 
    });
    
    // v4c-6: Better sorting - runs first, then hits, then walks (lower is better)
    // Perfect game (0R, 0H, 0W) > No-hitter (0R, 0H) > Shutout (0R) > etc.
    scores.sort((a, b) => {
        if (a.runs !== b.runs) return a.runs - b.runs;  // Fewer runs is better
        if (a.hits !== b.hits) return a.hits - b.hits;  // Fewer hits is better (tiebreaker)
        return (a.walks || 0) - (b.walks || 0);         // Fewer walks is better (2nd tiebreaker)
    });
    
    localStorage.setItem('quiz-leaderboard', JSON.stringify(scores.slice(0, 10)));
    scoreSubmission.style.display = 'none';
}

function showHighScores() {
    const scores = JSON.parse(localStorage.getItem('quiz-leaderboard') || '[]');
    const listDiv = document.getElementById('leaderboard-scores');
    
    listDiv.innerHTML = scores.length === 0 
        ? '<div class="no-scores">No scores yet!</div>'
        : scores.map((s, i) => `
            <div class="score-entry">
                <span class="score-rank">#${i + 1}</span>
                <span class="score-initials">${s.initials}</span>
                <span class="score-value">${s.runs} runs (${s.hits} H, ${s.innings} inn)</span>
            </div>
        `).join('');
    
    highScoresModal.style.display = 'flex';
}

// ============================================================================
// ANSWER HANDLING
// ============================================================================

function handleOptionClick(optionDiv) {
    if (optionDiv.classList.contains('disabled')) return;
    
    const selectedValue = optionDiv.dataset.value;
    
    if (selectedValue === 'WALK') {
        handleWalk();
        return;
    }
    
    // v3c-3: Hide bullpen tooltip on any click
    hideBullpenTooltip();
    
    const correctValue = getCorrectAnswer(currentPresident, currentMode);
    
    attempts++;
    
    if (selectedValue === correctValue) {
        optionDiv.classList.add('correct');
        
        if (attempts === 1) {
            outs++;
            totalCorrectFirstTry++;
            currentPresident.corrects = (currentPresident.corrects || 0) + 1;
            currentPresident.streak = (currentPresident.streak || 0) + 1;
            
            currentAtBatStats.atBats = 1;
            currentAtBatStats.strikeouts = 1;
            
            // v3c-4: Record batting average (out = no hit)
            const presIndex = presidents.indexOf(currentPresident);
            recordBattingResult(presIndex, false);
            
            updateBaseballProgress();
            
            setTimeout(() => {
                finishAtBat();
                if (outs >= OUTS_PER_INNING) {
                    endInning();
                } else {
                    pickNextPresident();
                }
            }, 800);
        } else {
            currentPresident.streak = 0;
            
            currentAtBatStats.atBats = 1;
            currentAtBatStats.hits = 1;
            currentAtBatStats.rbi = runsThisAtBat;
            
            let hitType = '';
            if (batterPosition === 1) {
                currentAtBatStats.singles = 1;
                hitType = 'single';
            } else if (batterPosition === 2) {
                currentAtBatStats.doubles = 1;
                hitType = 'double';
            } else if (batterPosition === 3) {
                currentAtBatStats.triples = 1;
                hitType = 'triple';
            } else if (batterPosition === 4) {
                currentAtBatStats.homeRuns = 1;
                currentAtBatStats.runs = 1;
                hitType = 'homerun';
            }
            
            const presIndex = presidents.indexOf(currentPresident);
            recordHitThisInning(presIndex, hitType, runsThisAtBat);
            recordBattingResult(presIndex, true); // v3c-4: Record batting average (hit)
            
            const hitNames = ['', 'SINGLE', 'DOUBLE', 'TRIPLE', 'HOME RUN'];
            if (batterPosition < 4) {
                showMessage(`It's a ${hitNames[batterPosition]}!`);
            }
            
            setTimeout(() => {
                finishAtBat();
                pickNextPresident();
            }, 1200);
        }
        
    } else {
        // WRONG
        optionDiv.classList.add('disabled', 'wrong-guess');
        lastWrongAnswer = selectedValue; // Track for adaptive hints
        
        const wrongCount = attempts;
        let runsScored = 0;
        
        disableWalkButton();
        
        if (wrongCount === 1) {
            optionDiv.textContent = "It's a hit!";
            currentInningHits++;
            currentInningTB = 1;
            
            if (bases[2]) { runsScored++; bases[2] = false; }
            bases[2] = bases[1]; bases[1] = false;
            bases[1] = bases[0]; bases[0] = false;
            batterPosition = 1;
            
        } else if (wrongCount === 2) {
            optionDiv.textContent = 'Advancing!';
            currentInningTB = 2;
            
            if (bases[2]) { runsScored++; bases[2] = false; }
            bases[2] = bases[1]; bases[1] = false;
            bases[1] = bases[0]; bases[0] = false;
            batterPosition = 2;
            
        } else if (wrongCount === 3) {
            optionDiv.textContent = 'Advancing!';
            currentInningTB = 3;
            
            if (bases[2]) { runsScored++; bases[2] = false; }
            bases[2] = bases[1]; bases[1] = false;
            bases[1] = bases[0]; bases[0] = false;
            batterPosition = 3;
            
        } else if (wrongCount >= MAX_WRONG_BEFORE_HR) {
            optionDiv.textContent = 'HOME RUN!';
            currentInningTB = 4;
            
            if (bases[2]) runsScored++;
            if (bases[1]) runsScored++;
            if (bases[0]) runsScored++;
            runsScored++;
            
            bases = [false, false, false];
            batterPosition = 4;
            
            currentAtBatStats.atBats = 1;
            currentAtBatStats.hits = 1;
            currentAtBatStats.homeRuns = 1;
            currentAtBatStats.totalBases = 4;
            currentAtBatStats.runs = 1;
            currentAtBatStats.rbi = runsThisAtBat + runsScored;
            
            const presIndex = presidents.indexOf(currentPresident);
            recordHitThisInning(presIndex, 'homerun', runsThisAtBat + runsScored);
        }
        
        runsThisAtBat += runsScored;
        currentInningRuns += runsScored;
        
        // v5c-9: Track earned runs against current pitcher
        currentPitcherER += runsScored;
        
        updateBasesDisplay();
        updateScoreboard();
        
        if (wrongCount >= MAX_WRONG_BEFORE_HR) {
            const totalRBI = runsThisAtBat;
            if (totalRBI === 1) showMessage('SOLO HOME RUN! 1 run scores!');
            else if (totalRBI === 4) showMessage(`GRAND SLAM! ${totalRBI} runs score!`);
            else showMessage(`${totalRBI}-RUN HOME RUN!`);
            
            setTimeout(() => {
                const hint = getEnhancedHint(currentPresident, currentMode);
                const correctText = buildCorrectAnswerText();
                showHintOverlay(hint, correctText);
            }, 800);
        } else if (runsScored > 0) {
            showMessage(`${wrongCount === 1 ? "It's a hit" : "Runners advance"}! ${runsScored} run${runsScored > 1 ? 's' : ''} score${runsScored === 1 ? 's' : ''}!<br><em>${currentQuestion}</em>`);
        } else {
            showMessage(`${wrongCount === 1 ? "It's a hit!" : "Runners advance!"} (keep trying)<br><em>${currentQuestion}</em>`);
        }
    }
}

function handleWalk() {
    walksThisInning++;
    currentAtBatStats.walks = 1;
    
    const runsScored = processWalk();
    currentInningRuns += runsScored;
    
    // v5c-9: Track earned runs against current pitcher
    currentPitcherER += runsScored;
    
    updateBasesDisplay();
    updateScoreboard();
    
    if (runsScored > 0) {
        showMessage(`Intentional Walk! ${runsScored} run scores!`);
    } else {
        showMessage('Intentional Walk - batter takes first base');
    }
    
    setTimeout(() => {
        const hint = getEnhancedHint(currentPresident, currentMode);
        const correctText = buildCorrectAnswerText();
        showHintOverlay(hint, correctText);
    }, 800);
}

// ============================================================================
// GAME RESET
// ============================================================================

function resetGame() {
    inning = 1;
    outs = 0;
    totalCorrectFirstTry = 0;
    totalQuestionsAsked = 0;
    currentInningHits = 0;
    currentInningRuns = 0;
    currentInningTB = 0;
    bases = [false, false, false];
    batterPosition = 0;
    runsThisAtBat = 0;
    hitsThisInning = {};
    walksThisInning = 0;
    inningScores = [];
    homeTotalRuns = 0;
    awayTotalRuns = 0;
    oppLineup = [];
    usaLineup = [];
    lineupPosition = 0;
    lineupLapsCompleted = 0;
    currentMode = 'number';
    currentQuestion = '';
    presidentsAskedThisGame = new Set();
    attempts = 0;
    timerStart = Date.now();
    homeTeam = null;
    awayTeam = null;
    lastWrongAnswer = null;
    questionStartTime = 0; // v3c-3
    bullpenTooltipVisible = false; // v3c-3
    
    // v5c-4: Reset pending batter state
    pendingBatter = null;
    pendingBatterIndex = null;
    
    // Reset pitcher state
    currentPitcher = null;
    currentPitcherIndex = null;
    startingPitcherIndex = null; // v3c-3
    pitchCount = 0;
    inningPitchCount = 0;
    pitchersUsed = [];
    fatigueLevel = 'fresh';
    playerBattingStats = {}; // v3c-4
    
    // v3c-5: Reset opponent pitcher and home offense
    oppPitcher = null;
    oppPitcherIndex = null;
    oppPitchCount = 0;
    oppFatigueLevel = 'fresh';
    oppPitchersUsed = [];
    homeLineupPosition = 0;
    lastHomeInningResults = [];
    
    // v3c-7: Reset LOB
    awayLOB = 0;
    homeLOB = 0;
    
    // v5c-9: Reset ERA tracking
    currentPitcherER = 0;
    currentPitcherIP = 0;
    pitcherERAStats = {};
    
    presidents.forEach(p => {
        p.streak = 0;
        p.corrects = 0;
        p.usedHints = [];
        p.battingStats = null;
        p.gameER = 0; // v5c-9: Reset opponent pitcher ER tracking
    });
    
    resetCurrentAtBatStats();
}

// ============================================================================
// DATA LOADING & INITIALIZATION
// ============================================================================

async function loadGameData() {
    try {
        const [presResponse, contextResponse, accResponse, batterResponse] = await Promise.all([
            fetch('json/presidents.json'),
            fetch('json/president-context.json'),
            fetch('json/yearly_accomplishments.json'),
            fetch('json/batter-stats.json')
        ]);
        
        presidents = await presResponse.json();
        presidents.forEach(p => { 
            p.corrects = 0; 
            p.streak = 0; 
            p.usedHints = []; 
            p.battingStats = null;
            // Ensure difficulty and stamina exist
            if (!p.difficulty) p.difficulty = 3;
            if (!p.stamina) p.stamina = 85;
        });
        
        presidentContext = await contextResponse.json();
        contextByRank = {};
        presidentContext.forEach(ctx => {
            contextByRank[ctx.rank] = ctx;
        });
        
        yearlyAccomplishments = await accResponse.json();
        accomplishmentsByName = {};
        yearlyAccomplishments.forEach(entry => {
            if (!accomplishmentsByName[entry.name]) accomplishmentsByName[entry.name] = [];
            accomplishmentsByName[entry.name].push(entry);
        });
        
        // v5c-8: Load static batter stats for consistent initial BA
        const batterData = await batterResponse.json();
        staticBatterStats = batterData.batters;
        console.log(`Loaded static batter stats for ${Object.keys(staticBatterStats).length} presidents`);
        
        console.log(`Loaded ${presidents.length} presidents, ${presidentContext.length} contexts`);
        return true;
    } catch (error) {
        console.error('Error loading game data:', error);
        return false;
    }
}

function initEventListeners() {
    // v5c-23: No longer need start button - lineup shows immediately
    // But keep for backwards compatibility if splash screen is shown
    const startBtn = document.getElementById('start-button');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            hideAllScreens();
            createLineups();
            showLineupCards();
        });
    }
    
    optionDivs.forEach(div => {
        div.addEventListener('click', () => handleOptionClick(div));
        div.addEventListener('touchend', (e) => { e.preventDefault(); handleOptionClick(div); });
    });
    
    const hintHandler = () => {
        if (isTransitioning) return;
        // v5c-5: Don't trigger normal hint handler when in reliever decision mode
        if (hintOverlay.classList.contains('reliever-mode')) return;
        isTransitioning = true;
        hideHintOverlay();
        finishAtBat();
        pickNextPresident();
        setTimeout(() => { isTransitioning = false; }, 500);
    };
    hintOverlay.addEventListener('click', hintHandler);
    hintOverlay.addEventListener('touchend', (e) => { e.preventDefault(); hintHandler(); });
    
    document.getElementById('settings-btn').addEventListener('click', showSettings);
    document.getElementById('close-settings-btn').addEventListener('click', hideSettings);
    document.getElementById('restart-quiz-btn').addEventListener('click', () => { 
        hideSettings(); 
        resetGame(); 
        createLineups();
        showLineupCards();
    });
    document.getElementById('main-menu-btn').addEventListener('click', () => { 
        hideSettings(); 
        hideAllScreens();
        resetGame();
        createLineups();
        showLineupCards();
    });
    document.getElementById('high-scores-btn').addEventListener('click', () => { hideSettings(); showHighScores(); });
    settingsScreen.addEventListener('click', (e) => { if (e.target === settingsScreen) hideSettings(); });
    
    // Bullpen button
    const bullpenBtn = document.getElementById('bullpen-btn');
    if (bullpenBtn) {
        bullpenBtn.addEventListener('click', showBullpenModal);
    }
    
    document.getElementById('close-high-scores-btn').addEventListener('click', () => { highScoresModal.style.display = 'none'; });
    highScoresModal.addEventListener('click', (e) => { if (e.target === highScoresModal) highScoresModal.style.display = 'none'; });
    
    document.getElementById('submit-score-btn').addEventListener('click', submitScore);
    document.getElementById('initials-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') submitScore(); });
    
    document.getElementById('play-again-btn').addEventListener('click', (e) => { 
        e.preventDefault(); 
        hideAllScreens(); 
        resetGame(); 
        createLineups();
        showLineupCards();
    });
    document.getElementById('view-leaderboard-btn').addEventListener('click', (e) => { e.preventDefault(); showHighScores(); });
}

// DEV-ONLY
function toggleScroll() {
    document.body.classList.toggle('scroll-enabled');
    const btn = document.getElementById('scroll-toggle-btn');
    if (btn) btn.innerHTML = document.body.classList.contains('scroll-enabled') ? '🔒 Locked' : '🔓 Scroll';
}
// /DEV-ONLY

window.addEventListener('resize', () => {
    if (currentImage && currentImage.offsetHeight > 0) updateRightSideHeight();
});

document.addEventListener('DOMContentLoaded', async function() {
    optionDivs = document.querySelectorAll('.option');
    gameArea = document.getElementById('game-area');
    splashScreen = document.getElementById('splash-screen');
    settingsScreen = document.getElementById('settings-screen');
    inningCompleteScreen = document.getElementById('inning-complete-screen');
    finalScreen = document.getElementById('final-screen');
    highScoresModal = document.getElementById('high-scores-modal');
    scoreSubmission = document.getElementById('score-submission');
    currentImage = document.getElementById('current-image');
    nextImage = document.getElementById('next-image');
    hintOverlay = document.getElementById('hint-overlay');
    messageArea = document.getElementById('message-area');
    lineupScreen = document.getElementById('lineup-screen');
    pitcherSelectScreen = document.getElementById('pitcher-select-screen');
    bullpenModal = document.getElementById('bullpen-modal');
    
    const loaded = await loadGameData();
    if (!loaded) {
        alert('Failed to load game data. Please refresh.');
        return;
    }
    
    initEventListeners();
    hideAllScreens();
    
    // v5c-23: Go directly to lineup screen (greeting is now in center column)
    createLineups();
    showLineupCards();
    
    console.log('Presidential Quiz v5c-23 initialized!');
});
