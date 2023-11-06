const axios = require("axios");
require('dotenv').config();

/**
 * Fetch all APIs in public api
 * @returns {Promise<Array<Object>, Error>} - a promise to get an array of api records
 */
const apiSearchService = async () => {
	console.log("Mock Api Search Service");
	return Promise.resolve({
		data:{
			entries:[
				{
					"API": "AdoptAPet",
					"Description": "Resource to help get pets adopted",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.adoptapet.com/public/apis/pet_list.html",
					"Category": "Animals"
				},
				{
					"API": "Axolotl",
					"Description": "Collection of axolotl pictures and facts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://theaxolotlapi.netlify.app/",
					"Category": "Animals"
				},
				{
					"API": "Cat Facts",
					"Description": "Daily cat facts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://alexwohlbruck.github.io/cat-facts/",
					"Category": "Animals"
				},
				{
					"API": "Cataas",
					"Description": "Cat as a service (cats pictures and gifs)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://cataas.com/",
					"Category": "Animals"
				},
				{
					"API": "Cats",
					"Description": "Pictures of cats from Tumblr",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://docs.thecatapi.com/",
					"Category": "Animals"
				},
				{
					"API": "Dog Facts",
					"Description": "Random dog facts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dukengn.github.io/Dog-facts-API/",
					"Category": "Animals"
				},
				{
					"API": "Dog Facts",
					"Description": "Random facts of Dogs",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://kinduff.github.io/dog-api/",
					"Category": "Animals"
				},
				{
					"API": "Dogs",
					"Description": "Based on the Stanford Dogs Dataset",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dog.ceo/dog-api/",
					"Category": "Animals"
				},
				{
					"API": "eBird",
					"Description": "Retrieve recent or notable birding observations within a region",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://documenter.getpostman.com/view/664302/S1ENwy59",
					"Category": "Animals"
				},
				{
					"API": "FishWatch",
					"Description": "Information and pictures about individual fish species",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.fishwatch.gov/developers",
					"Category": "Animals"
				},
				{
					"API": "HTTP Cat",
					"Description": "Cat for every HTTP Status",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://http.cat/",
					"Category": "Animals"
				},
				{
					"API": "HTTP Dog",
					"Description": "Dogs for every HTTP response status code",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://http.dog/",
					"Category": "Animals"
				},
				{
					"API": "IUCN",
					"Description": "IUCN Red List of Threatened Species",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "no",
					"Link": "http://apiv3.iucnredlist.org/api/v3/docs",
					"Category": "Animals"
				},
				{
					"API": "MeowFacts",
					"Description": "Get random cat facts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/wh-iterabb-it/meowfacts",
					"Category": "Animals"
				},
				{
					"API": "Movebank",
					"Description": "Movement and Migration data of animals",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/movebank/movebank-api-doc",
					"Category": "Animals"
				},
				{
					"API": "Petfinder",
					"Description": "Petfinder is dedicated to helping pets find homes, another resource to get pets adopted",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.petfinder.com/developers/",
					"Category": "Animals"
				},
				{
					"API": "PlaceBear",
					"Description": "Placeholder bear pictures",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://placebear.com/",
					"Category": "Animals"
				},
				{
					"API": "PlaceDog",
					"Description": "Placeholder Dog pictures",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://place.dog",
					"Category": "Animals"
				},
				{
					"API": "PlaceKitten",
					"Description": "Placeholder Kitten pictures",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://placekitten.com/",
					"Category": "Animals"
				},
				{
					"API": "RandomDog",
					"Description": "Random pictures of dogs",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://random.dog/woof.json",
					"Category": "Animals"
				},
				{
					"API": "RandomDuck",
					"Description": "Random pictures of ducks",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://random-d.uk/api",
					"Category": "Animals"
				},
				{
					"API": "RandomFox",
					"Description": "Random pictures of foxes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://randomfox.ca/floof/",
					"Category": "Animals"
				},
				{
					"API": "RescueGroups",
					"Description": "Adoption",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home",
					"Category": "Animals"
				},
				{
					"API": "Shibe.Online",
					"Description": "Random pictures of Shiba Inu, cats or birds",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "http://shibe.online/",
					"Category": "Animals"
				},
				{
					"API": "The Dog",
					"Description": "A public service all about Dogs, free to use when making your fancy new App, Website or Service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://thedogapi.com/",
					"Category": "Animals"
				},
				{
					"API": "xeno-canto",
					"Description": "Bird recordings",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://xeno-canto.org/explore/api",
					"Category": "Animals"
				},
				{
					"API": "Zoo Animals",
					"Description": "Facts and pictures of zoo animals",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://zoo-animal-api.herokuapp.com/",
					"Category": "Animals"
				},
				{
					"API": "AniAPI",
					"Description": "Anime discovery, streaming & syncing with trackers",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://aniapi.com/docs/",
					"Category": "Anime"
				},
				{
					"API": "AniDB",
					"Description": "Anime Database",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://wiki.anidb.net/HTTP_API_Definition",
					"Category": "Anime"
				},
				{
					"API": "AniList",
					"Description": "Anime discovery & tracking",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/AniList/ApiV2-GraphQL-Docs",
					"Category": "Anime"
				},
				{
					"API": "AnimeChan",
					"Description": "Anime quotes (over 10k+)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/RocktimSaikia/anime-chan",
					"Category": "Anime"
				},
				{
					"API": "AnimeFacts",
					"Description": "Anime Facts (over 100+)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://chandan-02.github.io/anime-facts-rest-api/",
					"Category": "Anime"
				},
				{
					"API": "AnimeNewsNetwork",
					"Description": "Anime industry news",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.animenewsnetwork.com/encyclopedia/api.php",
					"Category": "Anime"
				},
				{
					"API": "Catboy",
					"Description": "Neko images, funny GIFs & more",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://catboys.com/api",
					"Category": "Anime"
				},
				{
					"API": "Danbooru Anime",
					"Description": "Thousands of anime artist database to find good anime art",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://danbooru.donmai.us/wiki_pages/help:api",
					"Category": "Anime"
				},
				{
					"API": "Jikan",
					"Description": "Unofficial MyAnimeList API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://jikan.moe",
					"Category": "Anime"
				},
				{
					"API": "Kitsu",
					"Description": "Anime discovery platform",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://kitsu.docs.apiary.io/",
					"Category": "Anime"
				},
				{
					"API": "MangaDex",
					"Description": "Manga Database and Community",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.mangadex.org/docs.html",
					"Category": "Anime"
				},
				{
					"API": "Mangapi",
					"Description": "Translate manga pages from one language to another",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/pierre.carcellermeunier/api/mangapi3/",
					"Category": "Anime"
				},
				{
					"API": "MyAnimeList",
					"Description": "Anime and Manga Database and Community",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://myanimelist.net/clubs.php?cid=13727",
					"Category": "Anime"
				},
				{
					"API": "NekosBest",
					"Description": "Neko Images & Anime roleplaying GIFs",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.nekos.best",
					"Category": "Anime"
				},
				{
					"API": "Shikimori",
					"Description": "Anime discovery, tracking, forum, rates",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://shikimori.one/api/doc",
					"Category": "Anime"
				},
				{
					"API": "Studio Ghibli",
					"Description": "Resources from Studio Ghibli films",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://ghibliapi.herokuapp.com",
					"Category": "Anime"
				},
				{
					"API": "Trace Moe",
					"Description": "A useful tool to get the exact scene of an anime from a screenshot",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://soruly.github.io/trace.moe-api/#/",
					"Category": "Anime"
				},
				{
					"API": "Waifu.im",
					"Description": "Get waifu pictures from an archive of over 4000 images and multiple tags",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://waifu.im/docs",
					"Category": "Anime"
				},
				{
					"API": "Waifu.pics",
					"Description": "Image sharing platform for anime images",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://waifu.pics/docs",
					"Category": "Anime"
				},
				{
					"API": "AbuseIPDB",
					"Description": "IP/domain/URL reputation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.abuseipdb.com/",
					"Category": "Anti-Malware"
				},
				{
					"API": "AlienVault Open Threat Exchange (OTX)",
					"Description": "IP/domain/URL reputation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://otx.alienvault.com/api",
					"Category": "Anti-Malware"
				},
				{
					"API": "CAPEsandbox",
					"Description": "Malware execution and analysis",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://capev2.readthedocs.io/en/latest/usage/api.html",
					"Category": "Anti-Malware"
				},
				{
					"API": "Google Safe Browsing",
					"Description": "Google Link/Domain Flagging",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/safe-browsing/",
					"Category": "Anti-Malware"
				},
				{
					"API": "MalDatabase",
					"Description": "Provide malware datasets and threat intelligence feeds",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://maldatabase.com/api-doc.html",
					"Category": "Anti-Malware"
				},
				{
					"API": "MalShare",
					"Description": "Malware Archive / file sourcing",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://malshare.com/doc.php",
					"Category": "Anti-Malware"
				},
				{
					"API": "MalwareBazaar",
					"Description": "Collect and share malware samples",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bazaar.abuse.ch/api/",
					"Category": "Anti-Malware"
				},
				{
					"API": "Metacert",
					"Description": "Metacert Link Flagging",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://metacert.com/",
					"Category": "Anti-Malware"
				},
				{
					"API": "NoPhishy",
					"Description": "Check links to see if they're known phishing attempts",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://rapidapi.com/Amiichu/api/exerra-phishing-check/",
					"Category": "Anti-Malware"
				},
				{
					"API": "Phisherman",
					"Description": "IP/domain/URL reputation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://phisherman.gg/",
					"Category": "Anti-Malware"
				},
				{
					"API": "Scanii",
					"Description": "Simple REST API that can scan submitted documents/files for the presence of threats",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.scanii.com/",
					"Category": "Anti-Malware"
				},
				{
					"API": "URLhaus",
					"Description": "Bulk queries and Download Malware Samples",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://urlhaus-api.abuse.ch/",
					"Category": "Anti-Malware"
				},
				{
					"API": "URLScan.io",
					"Description": "Scan and Analyse URLs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://urlscan.io/about-api/",
					"Category": "Anti-Malware"
				},
				{
					"API": "VirusTotal",
					"Description": "VirusTotal File/URL Analysis",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.virustotal.com/en/documentation/public-api/",
					"Category": "Anti-Malware"
				},
				{
					"API": "Web of Trust",
					"Description": "IP/domain/URL reputation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://support.mywot.com/hc/en-us/sections/360004477734-API-",
					"Category": "Anti-Malware"
				},
				{
					"API": "Améthyste",
					"Description": "Generate images for Discord users",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.amethyste.moe/",
					"Category": "Art & Design"
				},
				{
					"API": "Art Institute of Chicago",
					"Description": "Art",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.artic.edu/docs/",
					"Category": "Art & Design"
				},
				{
					"API": "Colormind",
					"Description": "Color scheme generator",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://colormind.io/api-access/",
					"Category": "Art & Design"
				},
				{
					"API": "ColourLovers",
					"Description": "Get various patterns, palettes and images",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.colourlovers.com/api",
					"Category": "Art & Design"
				},
				{
					"API": "Cooper Hewitt",
					"Description": "Smithsonian Design Museum",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://collection.cooperhewitt.org/api",
					"Category": "Art & Design"
				},
				{
					"API": "Dribbble",
					"Description": "Discover the world’s top designers & creatives",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.dribbble.com",
					"Category": "Art & Design"
				},
				{
					"API": "EmojiHub",
					"Description": "Get emojis by categories and groups",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/cheatsnake/emojihub",
					"Category": "Art & Design"
				},
				{
					"API": "Europeana",
					"Description": "European Museum and Galleries content",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pro.europeana.eu/resources/apis/search",
					"Category": "Art & Design"
				},
				{
					"API": "Harvard Art Museums",
					"Description": "Art",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://github.com/harvardartmuseums/api-docs",
					"Category": "Art & Design"
				},
				{
					"API": "Icon Horse",
					"Description": "Favicons for any website, with fallbacks",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://icon.horse",
					"Category": "Art & Design"
				},
				{
					"API": "Iconfinder",
					"Description": "Icons",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.iconfinder.com",
					"Category": "Art & Design"
				},
				{
					"API": "Icons8",
					"Description": "Icons (find \"search icon\" hyperlink in page)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://img.icons8.com/",
					"Category": "Art & Design"
				},
				{
					"API": "Lordicon",
					"Description": "Icons with predone Animations",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://lordicon.com/",
					"Category": "Art & Design"
				},
				{
					"API": "Metropolitan Museum of Art",
					"Description": "Met Museum of Art",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://metmuseum.github.io/",
					"Category": "Art & Design"
				},
				{
					"API": "Noun Project",
					"Description": "Icons",
					"Auth": "OAuth",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://api.thenounproject.com/index.html",
					"Category": "Art & Design"
				},
				{
					"API": "PHP-Noise",
					"Description": "Noise Background Image Generator",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://php-noise.com/",
					"Category": "Art & Design"
				},
				{
					"API": "Pixel Encounter",
					"Description": "SVG Icon Generator",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://pixelencounter.com/api",
					"Category": "Art & Design"
				},
				{
					"API": "Rijksmuseum",
					"Description": "RijksMuseum Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.rijksmuseum.nl/object-metadata/api/",
					"Category": "Art & Design"
				},
				{
					"API": "Word Cloud",
					"Description": "Easily create word clouds",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://wordcloudapi.com/",
					"Category": "Art & Design"
				},
				{
					"API": "xColors",
					"Description": "Generate & convert colors",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://x-colors.herokuapp.com/",
					"Category": "Art & Design"
				},
				{
					"API": "Auth0",
					"Description": "Easy to implement, adaptable authentication and authorization platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://auth0.com",
					"Category": "Authentication & Authorization"
				},
				{
					"API": "GetOTP",
					"Description": "Implement OTP flow quickly",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://otp.dev/en/docs/",
					"Category": "Authentication & Authorization"
				},
				{
					"API": "Micro User Service",
					"Description": "User management and authentication",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://m3o.com/user",
					"Category": "Authentication & Authorization"
				},
				{
					"API": "MojoAuth",
					"Description": "Secure and modern passwordless authentication platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://mojoauth.com",
					"Category": "Authentication & Authorization"
				},
				{
					"API": "SAWO Labs",
					"Description": "Simplify login and improve user experience by integrating passwordless authentication in your app",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://sawolabs.com",
					"Category": "Authentication & Authorization"
				},
				{
					"API": "Stytch",
					"Description": "User infrastructure for modern applications",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://stytch.com/",
					"Category": "Authentication & Authorization"
				},
				{
					"API": "Warrant",
					"Description": "APIs for authorization and access control",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://warrant.dev/",
					"Category": "Authentication & Authorization"
				},
				{
					"API": "Bitquery",
					"Description": "Onchain GraphQL APIs & DEX APIs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://graphql.bitquery.io/ide",
					"Category": "Blockchain"
				},
				{
					"API": "Chainlink",
					"Description": "Build hybrid smart contracts with Chainlink",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://chain.link/developer-resources",
					"Category": "Blockchain"
				},
				{
					"API": "Chainpoint",
					"Description": "Chainpoint is a global network for anchoring data to the Bitcoin blockchain",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tierion.com/chainpoint/",
					"Category": "Blockchain"
				},
				{
					"API": "Covalent",
					"Description": "Multi-blockchain data aggregator platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.covalenthq.com/docs/api/",
					"Category": "Blockchain"
				},
				{
					"API": "Etherscan",
					"Description": "Ethereum explorer API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://etherscan.io/apis",
					"Category": "Blockchain"
				},
				{
					"API": "Helium",
					"Description": "Helium is a global, distributed network of Hotspots that create public, long-range wireless coverage",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.helium.com/api/blockchain/introduction/",
					"Category": "Blockchain"
				},
				{
					"API": "Nownodes",
					"Description": "Blockchain-as-a-service solution that provides high-quality connection via API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://nownodes.io/",
					"Category": "Blockchain"
				},
				{
					"API": "Steem",
					"Description": "Blockchain-based blogging and social media website",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "https://developers.steem.io/",
					"Category": "Blockchain"
				},
				{
					"API": "The Graph",
					"Description": "Indexing protocol for querying networks like Ethereum with GraphQL",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://thegraph.com",
					"Category": "Blockchain"
				},
				{
					"API": "Walltime",
					"Description": "To retrieve Walltime's market info",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://walltime.info/api.html",
					"Category": "Blockchain"
				},
				{
					"API": "Watchdata",
					"Description": "Provide simple and reliable API access to Ethereum blockchain",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.watchdata.io",
					"Category": "Blockchain"
				},
				{
					"API": "A Bíblia Digital",
					"Description": "Do not worry about managing the multiple versions of the Bible",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://www.abibliadigital.com.br/en",
					"Category": "Books"
				},
				{
					"API": "Bhagavad Gita",
					"Description": "Open Source Shrimad Bhagavad Gita API including 21+ authors translation in Sanskrit/English/Hindi",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.bhagavadgitaapi.in",
					"Category": "Books"
				},
				{
					"API": "Bhagavad Gita",
					"Description": "Bhagavad Gita text",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://bhagavadgita.io/api",
					"Category": "Books"
				},
				{
					"API": "Bhagavad Gita telugu",
					"Description": "Bhagavad Gita API in telugu and odia languages",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://gita-api.vercel.app",
					"Category": "Books"
				},
				{
					"API": "Bible-api",
					"Description": "Free Bible API with multiple languages",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://bible-api.com/",
					"Category": "Books"
				},
				{
					"API": "British National Bibliography",
					"Description": "Books",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://bnb.data.bl.uk/",
					"Category": "Books"
				},
				{
					"API": "Crossref Metadata Search",
					"Description": "Books & Articles Metadata",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/CrossRef/rest-api-doc",
					"Category": "Books"
				},
				{
					"API": "Ganjoor",
					"Description": "Classic Persian poetry works including access to related manuscripts, recitations and music tracks",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.ganjoor.net",
					"Category": "Books"
				},
				{
					"API": "Google Books",
					"Description": "Books",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/books/",
					"Category": "Books"
				},
				{
					"API": "GurbaniNow",
					"Description": "Fast and Accurate Gurbani RESTful API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/GurbaniNow/api",
					"Category": "Books"
				},
				{
					"API": "Gutendex",
					"Description": "Web-API for fetching data from Project Gutenberg Books Library",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://gutendex.com/",
					"Category": "Books"
				},
				{
					"API": "Open Library",
					"Description": "Books, book covers and related data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://openlibrary.org/developers/api",
					"Category": "Books"
				},
				{
					"API": "Penguin Publishing",
					"Description": "Books, book covers and related data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "http://www.penguinrandomhouse.biz/webservices/rest/",
					"Category": "Books"
				},
				{
					"API": "PoetryDB",
					"Description": "Enables you to get instant data from our vast poetry collection",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/thundercomb/poetrydb#readme",
					"Category": "Books"
				},
				{
					"API": "Quran",
					"Description": "RESTful Quran API with multiple languages",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://quran.api-docs.io/",
					"Category": "Books"
				},
				{
					"API": "Quran Cloud",
					"Description": "A RESTful Quran API to retrieve an Ayah, Surah, Juz or the entire Holy Quran",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://alquran.cloud/api",
					"Category": "Books"
				},
				{
					"API": "Quran-api",
					"Description": "Free Quran API Service with 90+ different languages and 400+ translations",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/fawazahmed0/quran-api#readme",
					"Category": "Books"
				},
				{
					"API": "Rig Veda",
					"Description": "Gods and poets, their categories, and the verse meters, with the mandal and sukta number",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://aninditabasu.github.io/indica/html/rv.html",
					"Category": "Books"
				},
				{
					"API": "The Bible",
					"Description": "Everything you need from the Bible in one discoverable place",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.api.bible",
					"Category": "Books"
				},
				{
					"API": "Thirukkural",
					"Description": "1330 Thirukkural poems and explanation in Tamil and English",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api-thirukkural.web.app/",
					"Category": "Books"
				},
				{
					"API": "Vedic Society",
					"Description": "Descriptions of all nouns (names, places, animals, things) from vedic literature",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://aninditabasu.github.io/indica/html/vs.html",
					"Category": "Books"
				},
				{
					"API": "Wizard World",
					"Description": "Get information from the Harry Potter universe",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://wizard-world-api.herokuapp.com/swagger/index.html",
					"Category": "Books"
				},
				{
					"API": "Wolne Lektury",
					"Description": "API for obtaining information about e-books available on the WolneLektury.pl website",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://wolnelektury.pl/api/",
					"Category": "Books"
				},
				{
					"API": "Apache Superset",
					"Description": "API to manage your BI dashboards and data sources on Superset",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://superset.apache.org/docs/api",
					"Category": "Business"
				},
				{
					"API": "Charity Search",
					"Description": "Non-profit charity data",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://charityapi.orghunter.com/",
					"Category": "Business"
				},
				{
					"API": "Clearbit Logo",
					"Description": "Search for company logos and embed them in your projects",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://clearbit.com/docs#logo-api",
					"Category": "Business"
				},
				{
					"API": "Domainsdb.info",
					"Description": "Registered Domain Names Search",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://domainsdb.info/",
					"Category": "Business"
				},
				{
					"API": "Freelancer",
					"Description": "Hire freelancers to get work done",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.freelancer.com",
					"Category": "Business"
				},
				{
					"API": "Gmail",
					"Description": "Flexible, RESTful access to the user's inbox",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/gmail/api/",
					"Category": "Business"
				},
				{
					"API": "Google Analytics",
					"Description": "Collect, configure and analyze your data to reach the right audience",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/analytics/",
					"Category": "Business"
				},
				{
					"API": "Instatus",
					"Description": "Post to and update maintenance and incidents on your status page through an HTTP REST API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://instatus.com/help/api",
					"Category": "Business"
				},
				{
					"API": "Mailchimp",
					"Description": "Send marketing campaigns and transactional mails",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mailchimp.com/developer/",
					"Category": "Business"
				},
				{
					"API": "mailjet",
					"Description": "Marketing email can be sent and mail templates made in MJML or HTML can be sent using API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mailjet.com/",
					"Category": "Business"
				},
				{
					"API": "markerapi",
					"Description": "Trademark Search",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://markerapi.com",
					"Category": "Business"
				},
				{
					"API": "ORB Intelligence",
					"Description": "Company lookup",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.orb-intelligence.com/docs/",
					"Category": "Business"
				},
				{
					"API": "Redash",
					"Description": "Access your queries and dashboards on Redash",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://redash.io/help/user-guide/integrations-and-api/api",
					"Category": "Business"
				},
				{
					"API": "Smartsheet",
					"Description": "Allows you to programmatically access and Smartsheet data and account information",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://smartsheet.redoc.ly/",
					"Category": "Business"
				},
				{
					"API": "Square",
					"Description": "Easy way to take payments, manage refunds, and help customers checkout online",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.squareup.com/reference/square",
					"Category": "Business"
				},
				{
					"API": "SwiftKanban",
					"Description": "Kanban software, Visualize Work, Increase Organizations Lead Time, Throughput & Productivity",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.digite.com/knowledge-base/swiftkanban/article/api-for-swift-kanban-web-services/#restapi",
					"Category": "Business"
				},
				{
					"API": "Tenders in Hungary",
					"Description": "Get data for procurements in Hungary in JSON format",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tenders.guru/hu/api",
					"Category": "Business"
				},
				{
					"API": "Tenders in Poland",
					"Description": "Get data for procurements in Poland in JSON format",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tenders.guru/pl/api",
					"Category": "Business"
				},
				{
					"API": "Tenders in Romania",
					"Description": "Get data for procurements in Romania in JSON format",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tenders.guru/ro/api",
					"Category": "Business"
				},
				{
					"API": "Tenders in Spain",
					"Description": "Get data for procurements in Spain in JSON format",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tenders.guru/es/api",
					"Category": "Business"
				},
				{
					"API": "Tenders in Ukraine",
					"Description": "Get data for procurements in Ukraine in JSON format",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tenders.guru/ua/api",
					"Category": "Business"
				},
				{
					"API": "Tomba email finder",
					"Description": "Email Finder for B2B sales and email marketing and email verifier",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://tomba.io/api",
					"Category": "Business"
				},
				{
					"API": "Trello",
					"Description": "Boards, lists and cards to help you organize and prioritize your projects",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.trello.com/",
					"Category": "Business"
				},
				{
					"API": "Abstract Public Holidays",
					"Description": "Data on national, regional, and religious holidays via API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.abstractapi.com/holidays-api",
					"Category": "Calendar"
				},
				{
					"API": "Calendarific",
					"Description": "Worldwide Holidays",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://calendarific.com/",
					"Category": "Calendar"
				},
				{
					"API": "Checkiday - National Holiday API",
					"Description": "Industry-leading Holiday API. Over 5,000 holidays and thousands of descriptions. Trusted by the World’s leading companies",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apilayer.com/marketplace/checkiday-api",
					"Category": "Calendar"
				},
				{
					"API": "Church Calendar",
					"Description": "Catholic liturgical calendar",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://calapi.inadiutorium.cz/",
					"Category": "Calendar"
				},
				{
					"API": "Czech Namedays Calendar",
					"Description": "Lookup for a name and returns nameday date",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://svatky.adresa.info",
					"Category": "Calendar"
				},
				{
					"API": "Festivo Public Holidays",
					"Description": "Fastest and most advanced public holiday and observance service on the market",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.getfestivo.com/docs/products/public-holidays-api/intro",
					"Category": "Calendar"
				},
				{
					"API": "Google Calendar",
					"Description": "Display, create and modify Google calendar events",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/google-apps/calendar/",
					"Category": "Calendar"
				},
				{
					"API": "Hebrew Calendar",
					"Description": "Convert between Gregorian and Hebrew, fetch Shabbat and Holiday times, etc",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://www.hebcal.com/home/developer-apis",
					"Category": "Calendar"
				},
				{
					"API": "Holidays",
					"Description": "Historical data regarding holidays",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://holidayapi.com/",
					"Category": "Calendar"
				},
				{
					"API": "LectServe",
					"Description": "Protestant liturgical calendar",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.lectserve.com",
					"Category": "Calendar"
				},
				{
					"API": "Nager.Date",
					"Description": "Public holidays for more than 90 countries",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://date.nager.at",
					"Category": "Calendar"
				},
				{
					"API": "Namedays Calendar",
					"Description": "Provides namedays for multiple countries",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://nameday.abalin.net",
					"Category": "Calendar"
				},
				{
					"API": "Non-Working Days",
					"Description": "Database of ICS files for non working days",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/gadael/icsdb",
					"Category": "Calendar"
				},
				{
					"API": "Non-Working Days",
					"Description": "Simple REST API for checking working, non-working or short days for Russia, CIS, USA and other",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://isdayoff.ru",
					"Category": "Calendar"
				},
				{
					"API": "Russian Calendar",
					"Description": "Check if a date is a Russian holiday or not",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/egno/work-calendar",
					"Category": "Calendar"
				},
				{
					"API": "UK Bank Holidays",
					"Description": "Bank holidays in England and Wales, Scotland and Northern Ireland",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.gov.uk/bank-holidays.json",
					"Category": "Calendar"
				},
				{
					"API": "AnonFiles",
					"Description": "Upload and share your files anonymously",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://anonfiles.com/docs/api",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "BayFiles",
					"Description": "Upload and share your files",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bayfiles.com/docs/api",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Box",
					"Description": "File Sharing and Storage",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.box.com/",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "ddownload",
					"Description": "File Sharing and Storage",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ddownload.com/api",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Dropbox",
					"Description": "File Sharing and Storage",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.dropbox.com/developers",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "File.io",
					"Description": "Super simple file sharing, convenient, anonymous and secure",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.file.io",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Filestack",
					"Description": "Filestack File Uploader & File Upload API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.filestack.com",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "GoFile",
					"Description": "Unlimited size file uploads for free",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://gofile.io/api",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Google Drive",
					"Description": "File Sharing and Storage",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/drive/",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Gyazo",
					"Description": "Save & Share screen captures instantly",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://gyazo.com/api/docs",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Imgbb",
					"Description": "Simple and quick private image sharing",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.imgbb.com/",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "OneDrive",
					"Description": "File Sharing and Storage",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.microsoft.com/onedrive",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Pantry",
					"Description": "Free JSON storage for small projects",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://getpantry.cloud/",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Pastebin",
					"Description": "Plain Text Storage",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pastebin.com/doc_api",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Pinata",
					"Description": "IPFS Pinning Services API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.pinata.cloud/",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Quip",
					"Description": "File Sharing and Storage for groups",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://quip.com/dev/automation/documentation",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Storj",
					"Description": "Decentralized Open-Source Cloud Storage",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.storj.io/dcs/",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "The Null Pointer",
					"Description": "No-bullshit file hosting and URL shortening service",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://0x0.st",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Web3 Storage",
					"Description": "File Sharing and Storage for Free with 1TB Space",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://web3.storage/",
					"Category": "Cloud Storage & File Sharing"
				},
				{
					"API": "Azure DevOps Health",
					"Description": "Resource health helps you diagnose and get support when an Azure issue impacts your resources",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "no",
					"Link": "https://docs.microsoft.com/en-us/rest/api/resourcehealth",
					"Category": "Continuous Integration"
				},
				{
					"API": "Bitrise",
					"Description": "Build tool and processes integrations to create efficient development pipelines",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api-docs.bitrise.io/",
					"Category": "Continuous Integration"
				},
				{
					"API": "Buddy",
					"Description": "The fastest continuous integration and continuous delivery platform",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://buddy.works/docs/api/getting-started/overview",
					"Category": "Continuous Integration"
				},
				{
					"API": "CircleCI",
					"Description": "Automate the software development process using continuous integration and continuous delivery",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://circleci.com/docs/api/v1-reference/",
					"Category": "Continuous Integration"
				},
				{
					"API": "Codeship",
					"Description": "Codeship is a Continuous Integration Platform in the cloud",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.cloudbees.com/docs/cloudbees-codeship/latest/api-overview/",
					"Category": "Continuous Integration"
				},
				{
					"API": "Travis CI",
					"Description": "Sync your GitHub projects with Travis CI to test your code in minutes",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.travis-ci.com/api/",
					"Category": "Continuous Integration"
				},
				{
					"API": "0x",
					"Description": "API for querying token and pool stats across various liquidity pools",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://0x.org/api",
					"Category": "Cryptocurrency"
				},
				{
					"API": "1inch",
					"Description": "API for querying decentralize exchange",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://1inch.io/api/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Alchemy Ethereum",
					"Description": "Ethereum Node-as-a-Service Provider",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.alchemy.com/alchemy/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "apilayer coinlayer",
					"Description": "Real-time Crypto Currency Exchange Rates",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://coinlayer.com",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Binance",
					"Description": "Exchange for Trading Cryptocurrencies based in China",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/binance/binance-spot-api-docs",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Bitcambio",
					"Description": "Get the list of all traded assets in the exchange",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://nova.bitcambio.com.br/api/v3/docs#a-public",
					"Category": "Cryptocurrency"
				},
				{
					"API": "BitcoinAverage",
					"Description": "Digital Asset Price Data for the blockchain industry",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apiv2.bitcoinaverage.com/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "BitcoinCharts",
					"Description": "Financial and Technical Data related to the Bitcoin Network",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bitcoincharts.com/about/exchanges/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Bitfinex",
					"Description": "Cryptocurrency Trading Platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.bitfinex.com/docs",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Bitmex",
					"Description": "Real-Time Cryptocurrency derivatives trading platform based in Hong Kong",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.bitmex.com/app/apiOverview",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Bittrex",
					"Description": "Next Generation Crypto Trading Platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bittrex.github.io/api/v3",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Block",
					"Description": "Bitcoin Payment, Wallet & Transaction Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://block.io/docs/basic",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Blockchain",
					"Description": "Bitcoin Payment, Wallet & Transaction Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.blockchain.com/api",
					"Category": "Cryptocurrency"
				},
				{
					"API": "blockfrost Cardano",
					"Description": "Interaction with the Cardano mainnet and several testnets",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://blockfrost.io/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Brave NewCoin",
					"Description": "Real-time and historic crypto data from more than 200+ exchanges",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bravenewcoin.com/developers",
					"Category": "Cryptocurrency"
				},
				{
					"API": "BtcTurk",
					"Description": "Real-time cryptocurrency data, graphs and API that allows buy&sell",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.btcturk.com/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Bybit",
					"Description": "Cryptocurrency data feed and algorithmic trading",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bybit-exchange.github.io/docs/linear/#t-introduction",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CoinAPI",
					"Description": "All Currency Exchanges integrate under a single api",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://docs.coinapi.io/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Coinbase",
					"Description": "Bitcoin, Bitcoin Cash, Litecoin and Ethereum Prices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.coinbase.com",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Coinbase Pro",
					"Description": "Cryptocurrency Trading Platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.pro.coinbase.com/#api",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CoinCap",
					"Description": "Real time Cryptocurrency prices through a RESTful API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.coincap.io/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CoinDCX",
					"Description": "Cryptocurrency Trading Platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.coindcx.com/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CoinDesk",
					"Description": "CoinDesk's Bitcoin Price Index (BPI) in multiple currencies",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://old.coindesk.com/coindesk-api/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CoinGecko",
					"Description": "Cryptocurrency Price, Market, and Developer/Social Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "http://www.coingecko.com/api",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Coinigy",
					"Description": "Interacting with Coinigy Accounts and Exchange Directly",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://coinigy.docs.apiary.io",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Coinlib",
					"Description": "Crypto Currency Prices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://coinlib.io/apidocs",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Coinlore",
					"Description": "Cryptocurrencies prices, volume and more",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.coinlore.com/cryptocurrency-data-api",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CoinMarketCap",
					"Description": "Cryptocurrencies Prices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://coinmarketcap.com/api/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Coinpaprika",
					"Description": "Cryptocurrencies prices, volume and more",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.coinpaprika.com",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CoinRanking",
					"Description": "Live Cryptocurrency data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.coinranking.com/api/documentation",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Coinremitter",
					"Description": "Cryptocurrencies Payment & Prices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://coinremitter.com/docs",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CoinStats",
					"Description": "Crypto Tracker",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CryptAPI",
					"Description": "Cryptocurrency Payment Processor",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.cryptapi.io/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CryptingUp",
					"Description": "Cryptocurrency data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.cryptingup.com/apidoc/#introduction",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CryptoCompare",
					"Description": "Cryptocurrencies Comparison",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.cryptocompare.com/api#",
					"Category": "Cryptocurrency"
				},
				{
					"API": "CryptoMarket",
					"Description": "Cryptocurrencies Trading platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.exchange.cryptomkt.com/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Cryptonator",
					"Description": "Cryptocurrencies Exchange Rates",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.cryptonator.com/api/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "dYdX",
					"Description": "Decentralized cryptocurrency exchange",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.dydx.exchange/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Ethplorer",
					"Description": "Ethereum tokens, balances, addresses, history of transactions, contracts, and custom structures",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API",
					"Category": "Cryptocurrency"
				},
				{
					"API": "EXMO",
					"Description": "Cryptocurrencies exchange based in UK",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://documenter.getpostman.com/view/10287440/SzYXWKPi",
					"Category": "Cryptocurrency"
				},
				{
					"API": "FTX",
					"Description": "Complete REST, websocket, and FTX APIs to suit your algorithmic trading needs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.ftx.com/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Gateio",
					"Description": "API provides spot, margin and futures trading operations",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.gate.io/api2",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Gemini",
					"Description": "Cryptocurrencies Exchange",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.gemini.com/rest-api/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Hirak Exchange Rates",
					"Description": "Exchange rates between 162 currency & 300 crypto currency update each 5 min, accurate, no limits",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rates.hirak.site/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Huobi",
					"Description": "Seychelles based cryptocurrency exchange",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://huobiapi.github.io/docs/spot/v1/en/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "icy.tools",
					"Description": "GraphQL based NFT API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.icy.tools/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Indodax",
					"Description": "Trade your Bitcoin and other assets with rupiah",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/btcid/indodax-official-api-docs",
					"Category": "Cryptocurrency"
				},
				{
					"API": "INFURA Ethereum",
					"Description": "Interaction with the Ethereum mainnet and several testnets",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://infura.io/product/ethereum",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Kraken",
					"Description": "Cryptocurrencies Exchange",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.kraken.com/rest/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "KuCoin",
					"Description": "Cryptocurrency Trading Platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.kucoin.com/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Localbitcoins",
					"Description": "P2P platform to buy and sell Bitcoins",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://localbitcoins.com/api-docs/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Mempool",
					"Description": "Bitcoin API Service focusing on the transaction fee",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://mempool.space/api",
					"Category": "Cryptocurrency"
				},
				{
					"API": "MercadoBitcoin",
					"Description": "Brazilian Cryptocurrency Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mercadobitcoin.com.br/api-doc/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Messari",
					"Description": "Provides API endpoints for thousands of crypto assets",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://messari.io/api",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Nexchange",
					"Description": "Automated cryptocurrency exchange service",
					"Auth": "",
					"HTTPS": false,
					"Cors": "yes",
					"Link": "https://nexchange2.docs.apiary.io/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Nomics",
					"Description": "Historical and realtime cryptocurrency prices and market data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://nomics.com/docs/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "NovaDax",
					"Description": "NovaDAX API to access all market data, trading management endpoints",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://doc.novadax.com/en-US/#introduction",
					"Category": "Cryptocurrency"
				},
				{
					"API": "OKEx",
					"Description": "Cryptocurrency exchange based in Seychelles",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.okex.com/docs/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Poloniex",
					"Description": "US based digital asset exchange",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.poloniex.com",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Solana JSON RPC",
					"Description": "Provides various endpoints to interact with the Solana Blockchain",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.solana.com/developing/clients/jsonrpc-api",
					"Category": "Cryptocurrency"
				},
				{
					"API": "Technical Analysis",
					"Description": "Cryptocurrency prices and technical analysis",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://technical-analysis-api.com",
					"Category": "Cryptocurrency"
				},
				{
					"API": "VALR",
					"Description": "Cryptocurrency Exchange based in South Africa",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.valr.com/",
					"Category": "Cryptocurrency"
				},
				{
					"API": "WorldCoinIndex",
					"Description": "Cryptocurrencies Prices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.worldcoinindex.com/apiservice",
					"Category": "Cryptocurrency"
				},
				{
					"API": "ZMOK",
					"Description": "Ethereum JSON RPC API and Web3 provider",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://zmok.io",
					"Category": "Cryptocurrency"
				},
				{
					"API": "1Forge",
					"Description": "Forex currency market data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://1forge.com/forex-data-api/api-documentation",
					"Category": "Currency Exchange"
				},
				{
					"API": "Amdoren",
					"Description": "Free currency API with over 150 currencies",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.amdoren.com/currency-api/",
					"Category": "Currency Exchange"
				},
				{
					"API": "apilayer fixer.io",
					"Description": "Exchange rates and currency conversion",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://fixer.io",
					"Category": "Currency Exchange"
				},
				{
					"API": "Bank of Russia",
					"Description": "Exchange rates and currency conversion",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.cbr.ru/development/SXML/",
					"Category": "Currency Exchange"
				},
				{
					"API": "Currency-api",
					"Description": "Free Currency Exchange Rates API with 150+ Currencies & No Rate Limits",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/fawazahmed0/currency-api#readme",
					"Category": "Currency Exchange"
				},
				{
					"API": "CurrencyFreaks",
					"Description": "Provides current and historical currency exchange rates with free plan 1K requests/month",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://currencyfreaks.com/",
					"Category": "Currency Exchange"
				},
				{
					"API": "Currencylayer",
					"Description": "Exchange rates and currency conversion",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://currencylayer.com/documentation",
					"Category": "Currency Exchange"
				},
				{
					"API": "CurrencyScoop",
					"Description": "Real-time and historical currency rates JSON API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://currencyscoop.com/api-documentation",
					"Category": "Currency Exchange"
				},
				{
					"API": "Czech National Bank",
					"Description": "A collection of exchange rates",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.xml",
					"Category": "Currency Exchange"
				},
				{
					"API": "Economia.Awesome",
					"Description": "Portuguese free currency prices and conversion with no rate limits",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.awesomeapi.com.br/api-de-moedas",
					"Category": "Currency Exchange"
				},
				{
					"API": "ExchangeRate-API",
					"Description": "Free currency conversion",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.exchangerate-api.com",
					"Category": "Currency Exchange"
				},
				{
					"API": "Exchangerate.host",
					"Description": "Free foreign exchange & crypto rates API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://exchangerate.host",
					"Category": "Currency Exchange"
				},
				{
					"API": "Exchangeratesapi.io",
					"Description": "Exchange rates with currency conversion",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://exchangeratesapi.io",
					"Category": "Currency Exchange"
				},
				{
					"API": "Frankfurter",
					"Description": "Exchange rates, currency conversion and time series",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.frankfurter.app/docs",
					"Category": "Currency Exchange"
				},
				{
					"API": "FreeForexAPI",
					"Description": "Real-time foreign exchange rates for major currency pairs",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://freeforexapi.com/Home/Api",
					"Category": "Currency Exchange"
				},
				{
					"API": "National Bank of Poland",
					"Description": "A collection of currency exchange rates (data in XML and JSON)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "http://api.nbp.pl/en.html",
					"Category": "Currency Exchange"
				},
				{
					"API": "VATComply.com",
					"Description": "Exchange rates, geolocation and VAT number validation",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.vatcomply.com/documentation",
					"Category": "Currency Exchange"
				},
				{
					"API": "Lob.com",
					"Description": "US Address Verification",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://lob.com/",
					"Category": "Data Validation"
				},
				{
					"API": "Postman Echo",
					"Description": "Test api server to receive and return value from HTTP method",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.postman-echo.com",
					"Category": "Data Validation"
				},
				{
					"API": "PurgoMalum",
					"Description": "Content validator against profanity & obscenity",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.purgomalum.com",
					"Category": "Data Validation"
				},
				{
					"API": "US Autocomplete",
					"Description": "Enter address data quickly with real-time address suggestions",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.smarty.com/docs/cloud/us-autocomplete-pro-api",
					"Category": "Data Validation"
				},
				{
					"API": "US Extract",
					"Description": "Extract postal addresses from any text including emails",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.smarty.com/products/apis/us-extract-api",
					"Category": "Data Validation"
				},
				{
					"API": "US Street Address",
					"Description": "Validate and append data for any US postal address",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.smarty.com/docs/cloud/us-street-api",
					"Category": "Data Validation"
				},
				{
					"API": "vatlayer",
					"Description": "VAT number validation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://vatlayer.com/documentation",
					"Category": "Data Validation"
				},
				{
					"API": "24 Pull Requests",
					"Description": "Project to promote open source collaboration during December",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://24pullrequests.com/api",
					"Category": "Development"
				},
				{
					"API": "Abstract Screenshot",
					"Description": "Take programmatic screenshots of web pages from any website",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.abstractapi.com/website-screenshot-api",
					"Category": "Development"
				},
				{
					"API": "Agify.io",
					"Description": "Estimates the age from a first name",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://agify.io",
					"Category": "Development"
				},
				{
					"API": "API Grátis",
					"Description": "Multiples services and public APIs",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apigratis.com.br/",
					"Category": "Development"
				},
				{
					"API": "ApicAgent",
					"Description": "Extract device details from user-agent string",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.apicagent.com",
					"Category": "Development"
				},
				{
					"API": "ApiFlash",
					"Description": "Chrome based screenshot API for developers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apiflash.com/",
					"Category": "Development"
				},
				{
					"API": "apilayer userstack",
					"Description": "Secure User-Agent String Lookup JSON API",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://userstack.com/",
					"Category": "Development"
				},
				{
					"API": "APIs.guru",
					"Description": "Wikipedia for Web APIs, OpenAPI/Swagger specs for public APIs",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apis.guru/api-doc/",
					"Category": "Development"
				},
				{
					"API": "Azure DevOps",
					"Description": "The Azure DevOps basic components of a REST API request/response pair",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.microsoft.com/en-us/rest/api/azure/devops",
					"Category": "Development"
				},
				{
					"API": "Base",
					"Description": "Building quick backends",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.base-api.io/",
					"Category": "Development"
				},
				{
					"API": "Beeceptor",
					"Description": "Build a mock Rest API endpoint in seconds",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://beeceptor.com/",
					"Category": "Development"
				},
				{
					"API": "Bitbucket",
					"Description": "Bitbucket API",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.atlassian.com/bitbucket/api/2/reference/",
					"Category": "Development"
				},
				{
					"API": "Blague.xyz",
					"Description": "La plus grande API de Blagues FR/The biggest FR jokes API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://blague.xyz/",
					"Category": "Development"
				},
				{
					"API": "Blitapp",
					"Description": "Schedule screenshots of web pages and sync them to your cloud",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://blitapp.com/api/",
					"Category": "Development"
				},
				{
					"API": "Blynk-Cloud",
					"Description": "Control IoT Devices from Blynk IoT Cloud",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://blynkapi.docs.apiary.io/#",
					"Category": "Development"
				},
				{
					"API": "Bored",
					"Description": "Find random activities to fight boredom",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.boredapi.com/",
					"Category": "Development"
				},
				{
					"API": "Brainshop.ai",
					"Description": "Make A Free A.I Brain",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://brainshop.ai/",
					"Category": "Development"
				},
				{
					"API": "Browshot",
					"Description": "Easily make screenshots of web pages in any screen size, as any device",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://browshot.com/api/documentation",
					"Category": "Development"
				},
				{
					"API": "CDNJS",
					"Description": "Library info on CDNJS",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.cdnjs.com/libraries/jquery",
					"Category": "Development"
				},
				{
					"API": "Changelogs.md",
					"Description": "Structured changelog metadata from open source projects",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://changelogs.md",
					"Category": "Development"
				},
				{
					"API": "Ciprand",
					"Description": "Secure random string generator",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/polarspetroll/ciprand",
					"Category": "Development"
				},
				{
					"API": "Cloudflare Trace",
					"Description": "Get IP Address, Timestamp, User Agent, Country Code, IATA, HTTP Version, TLS/SSL Version & More",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/fawazahmed0/cloudflare-trace-api",
					"Category": "Development"
				},
				{
					"API": "Codex",
					"Description": "Online Compiler for Various Languages",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/Jaagrav/CodeX",
					"Category": "Development"
				},
				{
					"API": "Contentful Images",
					"Description": "Used to retrieve and apply transformations to images",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.contentful.com/developers/docs/references/images-api/",
					"Category": "Development"
				},
				{
					"API": "CORS Proxy",
					"Description": "Get around the dreaded CORS error by using this proxy as a middle man",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/burhanuday/cors-proxy",
					"Category": "Development"
				},
				{
					"API": "CountAPI",
					"Description": "Free and simple counting service. You can use it to track page hits and specific events",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://countapi.xyz",
					"Category": "Development"
				},
				{
					"API": "Databricks",
					"Description": "Service to manage your databricks account,clusters, notebooks, jobs and workspaces",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.databricks.com/dev-tools/api/latest/index.html",
					"Category": "Development"
				},
				{
					"API": "DigitalOcean Status",
					"Description": "Status of all DigitalOcean services",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://status.digitalocean.com/api",
					"Category": "Development"
				},
				{
					"API": "Docker Hub",
					"Description": "Interact with Docker Hub",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.docker.com/docker-hub/api/latest/",
					"Category": "Development"
				},
				{
					"API": "DomainDb Info",
					"Description": "Domain name search to find all domains containing particular words/phrases/etc",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.domainsdb.info/",
					"Category": "Development"
				},
				{
					"API": "ExtendsClass JSON Storage",
					"Description": "A simple JSON store API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://extendsclass.com/json-storage.html",
					"Category": "Development"
				},
				{
					"API": "GeekFlare",
					"Description": "Provide numerous capabilities for important testing and monitoring methods for websites",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apidocs.geekflare.com/docs/geekflare-api",
					"Category": "Development"
				},
				{
					"API": "Genderize.io",
					"Description": "Estimates a gender from a first name",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://genderize.io",
					"Category": "Development"
				},
				{
					"API": "GETPing",
					"Description": "Trigger an email notification with a simple GET request",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.getping.info",
					"Category": "Development"
				},
				{
					"API": "Ghost",
					"Description": "Get Published content into your Website, App or other embedded media",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://ghost.org/",
					"Category": "Development"
				},
				{
					"API": "GitHub",
					"Description": "Make use of GitHub repositories, code and user info programmatically",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.github.com/en/free-pro-team@latest/rest",
					"Category": "Development"
				},
				{
					"API": "Gitlab",
					"Description": "Automate GitLab interaction programmatically",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.gitlab.com/ee/api/",
					"Category": "Development"
				},
				{
					"API": "Gitter",
					"Description": "Chat for Developers",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.gitter.im/docs/welcome",
					"Category": "Development"
				},
				{
					"API": "Glitterly",
					"Description": "Image generation API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developers.glitterly.app",
					"Category": "Development"
				},
				{
					"API": "Google Docs",
					"Description": "API to read, write, and format Google Docs documents",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/docs/api/reference/rest",
					"Category": "Development"
				},
				{
					"API": "Google Firebase",
					"Description": "Google's mobile application development platform that helps build, improve, and grow app",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://firebase.google.com/docs",
					"Category": "Development"
				},
				{
					"API": "Google Fonts",
					"Description": "Metadata for all families served by Google Fonts",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/fonts/docs/developer_api",
					"Category": "Development"
				},
				{
					"API": "Google Keep",
					"Description": "API to read, write, and format Google Keep notes",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/keep/api/reference/rest",
					"Category": "Development"
				},
				{
					"API": "Google Sheets",
					"Description": "API to read, write, and format Google Sheets data",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/sheets/api/reference/rest",
					"Category": "Development"
				},
				{
					"API": "Google Slides",
					"Description": "API to read, write, and format Google Slides presentations",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/slides/api/reference/rest",
					"Category": "Development"
				},
				{
					"API": "Gorest",
					"Description": "Online REST API for Testing and Prototyping",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://gorest.co.in/",
					"Category": "Development"
				},
				{
					"API": "Hasura",
					"Description": "GraphQL and REST API Engine with built in Authorization",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://hasura.io/opensource/",
					"Category": "Development"
				},
				{
					"API": "Heroku",
					"Description": "REST API to programmatically create apps, provision add-ons and perform other task on Heroku",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://devcenter.heroku.com/articles/platform-api-reference/",
					"Category": "Development"
				},
				{
					"API": "host-t.com",
					"Description": "Basic DNS query via HTTP GET request",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://host-t.com",
					"Category": "Development"
				},
				{
					"API": "Host.io",
					"Description": "Domains Data API for Developers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://host.io",
					"Category": "Development"
				},
				{
					"API": "HTTP2.Pro",
					"Description": "Test endpoints for client and server HTTP/2 protocol support",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://http2.pro/doc/api",
					"Category": "Development"
				},
				{
					"API": "Httpbin",
					"Description": "A Simple HTTP Request & Response Service",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://httpbin.org/",
					"Category": "Development"
				},
				{
					"API": "Httpbin Cloudflare",
					"Description": "A Simple HTTP Request & Response Service with HTTP/3 Support by Cloudflare",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://cloudflare-quic.com/b/",
					"Category": "Development"
				},
				{
					"API": "Hunter",
					"Description": "API for domain search, professional email finder, author finder and email verifier",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://hunter.io/api",
					"Category": "Development"
				},
				{
					"API": "IBM Text to Speech",
					"Description": "Convert text to speech",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://cloud.ibm.com/docs/text-to-speech/getting-started.html",
					"Category": "Development"
				},
				{
					"API": "Icanhazepoch",
					"Description": "Get Epoch time",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://icanhazepoch.com",
					"Category": "Development"
				},
				{
					"API": "Icanhazip",
					"Description": "IP Address API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://major.io/icanhazip-com-faq/",
					"Category": "Development"
				},
				{
					"API": "IFTTT",
					"Description": "IFTTT Connect API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://platform.ifttt.com/docs/connect_api",
					"Category": "Development"
				},
				{
					"API": "Image-Charts",
					"Description": "Generate charts, QR codes and graph images",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://documentation.image-charts.com/",
					"Category": "Development"
				},
				{
					"API": "import.io",
					"Description": "Retrieve structured data from a website or RSS feed",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://api.docs.import.io/",
					"Category": "Development"
				},
				{
					"API": "ip-fast.com",
					"Description": "IP address, country and city",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://ip-fast.com/docs/",
					"Category": "Development"
				},
				{
					"API": "IP2WHOIS Information Lookup",
					"Description": "WHOIS domain name lookup",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.ip2whois.com/",
					"Category": "Development"
				},
				{
					"API": "ipfind.io",
					"Description": "Geographic location of an IP address or any domain name along with some other useful information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://ipfind.io",
					"Category": "Development"
				},
				{
					"API": "IPify",
					"Description": "A simple IP Address API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.ipify.org/",
					"Category": "Development"
				},
				{
					"API": "IPinfo",
					"Description": "Another simple IP Address API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ipinfo.io/developers",
					"Category": "Development"
				},
				{
					"API": "jsDelivr",
					"Description": "Package info and download stats on jsDelivr CDN",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/jsdelivr/data.jsdelivr.com",
					"Category": "Development"
				},
				{
					"API": "JSON 2 JSONP",
					"Description": "Convert JSON to JSONP (on-the-fly) for easy cross-domain data requests using client-side JavaScript",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://json2jsonp.com/",
					"Category": "Development"
				},
				{
					"API": "JSONbin.io",
					"Description": "Free JSON storage service. Ideal for small scale Web apps, Websites and Mobile apps",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://jsonbin.io",
					"Category": "Development"
				},
				{
					"API": "Kroki",
					"Description": "Creates diagrams from textual descriptions",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://kroki.io",
					"Category": "Development"
				},
				{
					"API": "License-API",
					"Description": "Unofficial REST API for choosealicense.com",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/cmccandless/license-api/blob/master/README.md",
					"Category": "Development"
				},
				{
					"API": "Logs.to",
					"Description": "Generate logs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://logs.to/",
					"Category": "Development"
				},
				{
					"API": "Lua Decompiler",
					"Description": "Online Lua 5.1 Decompiler",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://lua-decompiler.ferib.dev/",
					"Category": "Development"
				},
				{
					"API": "MAC address vendor lookup",
					"Description": "Retrieve vendor details and other information regarding a given MAC address or an OUI",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://macaddress.io/api",
					"Category": "Development"
				},
				{
					"API": "Micro DB",
					"Description": "Simple database service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://m3o.com/db",
					"Category": "Development"
				},
				{
					"API": "MicroENV",
					"Description": "Fake Rest API for developers",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://microenv.com/",
					"Category": "Development"
				},
				{
					"API": "Mocky",
					"Description": "Mock user defined test JSON for REST API endpoints",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://designer.mocky.io/",
					"Category": "Development"
				},
				{
					"API": "MY IP",
					"Description": "Get IP address information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.myip.com/api-docs/",
					"Category": "Development"
				},
				{
					"API": "Nationalize.io",
					"Description": "Estimate the nationality of a first name",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://nationalize.io",
					"Category": "Development"
				},
				{
					"API": "Netlify",
					"Description": "Netlify is a hosting service for the programmable web",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.netlify.com/api/get-started/",
					"Category": "Development"
				},
				{
					"API": "NetworkCalc",
					"Description": "Network calculators, including subnets, DNS, binary, and security tools",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://networkcalc.com/api/docs",
					"Category": "Development"
				},
				{
					"API": "npm Registry",
					"Description": "Query information about your favorite Node.js libraries programatically",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md",
					"Category": "Development"
				},
				{
					"API": "OneSignal",
					"Description": "Self-serve customer engagement solution for Push Notifications, Email, SMS & In-App",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://documentation.onesignal.com/docs/onesignal-api",
					"Category": "Development"
				},
				{
					"API": "Open Page Rank",
					"Description": "API for calculating and comparing metrics of different websites using Page Rank algorithm",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.domcop.com/openpagerank/",
					"Category": "Development"
				},
				{
					"API": "OpenAPIHub",
					"Description": "The All-in-one API Platform",
					"Auth": "X-Mashape-Key",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://hub.openapihub.com/",
					"Category": "Development"
				},
				{
					"API": "OpenGraphr",
					"Description": "Really simple API to retrieve Open Graph data from an URL",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opengraphr.com/docs/1.0/overview",
					"Category": "Development"
				},
				{
					"API": "oyyi",
					"Description": "API for Fake Data, image/video conversion, optimization, pdf optimization and thumbnail generation",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://oyyi.xyz/docs/1.0",
					"Category": "Development"
				},
				{
					"API": "PageCDN",
					"Description": "Public API for javascript, css and font libraries on PageCDN",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://pagecdn.com/docs/public-api",
					"Category": "Development"
				},
				{
					"API": "Postman",
					"Description": "Tool for testing APIs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a",
					"Category": "Development"
				},
				{
					"API": "ProxyCrawl",
					"Description": "Scraping and crawling anticaptcha service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://proxycrawl.com",
					"Category": "Development"
				},
				{
					"API": "ProxyKingdom",
					"Description": "Rotating Proxy API that produces a working proxy on every request",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://proxykingdom.com",
					"Category": "Development"
				},
				{
					"API": "Pusher Beams",
					"Description": "Push notifications for Android & iOS",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pusher.com/beams",
					"Category": "Development"
				},
				{
					"API": "QR code",
					"Description": "Create an easy to read QR code and URL shortener",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.qrtag.net/api/",
					"Category": "Development"
				},
				{
					"API": "QR code",
					"Description": "Generate and decode / read QR code graphics",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://goqr.me/api/",
					"Category": "Development"
				},
				{
					"API": "Qrcode Monkey",
					"Description": "Integrate custom and unique looking QR codes into your system or workflow",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.qrcode-monkey.com/qr-code-api-with-logo/",
					"Category": "Development"
				},
				{
					"API": "QuickChart",
					"Description": "Generate chart and graph images",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://quickchart.io/",
					"Category": "Development"
				},
				{
					"API": "Random Stuff",
					"Description": "Can be used to get AI Response, jokes, memes, and much more at lightning-fast speed",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api-docs.pgamerx.com/",
					"Category": "Development"
				},
				{
					"API": "Rejax",
					"Description": "Reverse AJAX service to notify clients",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://rejax.io/",
					"Category": "Development"
				},
				{
					"API": "ReqRes",
					"Description": "A hosted REST-API ready to respond to your AJAX requests",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://reqres.in/ ",
					"Category": "Development"
				},
				{
					"API": "RSS feed to JSON",
					"Description": "Returns RSS feed in JSON format using feed URL",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://rss-to-json-serverless-api.vercel.app",
					"Category": "Development"
				},
				{
					"API": "SavePage.io",
					"Description": "A free, RESTful API used to screenshot any desktop, or mobile website",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.savepage.io",
					"Category": "Development"
				},
				{
					"API": "ScrapeNinja",
					"Description": "Scraping API with Chrome fingerprint and residential proxies",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://scrapeninja.net",
					"Category": "Development"
				},
				{
					"API": "ScraperApi",
					"Description": "Easily build scalable web scrapers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.scraperapi.com",
					"Category": "Development"
				},
				{
					"API": "scraperBox",
					"Description": "Undetectable web scraping API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://scraperbox.com/",
					"Category": "Development"
				},
				{
					"API": "scrapestack",
					"Description": "Real-time, Scalable Proxy & Web Scraping REST API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://scrapestack.com/",
					"Category": "Development"
				},
				{
					"API": "ScrapingAnt",
					"Description": "Headless Chrome scraping with a simple API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://scrapingant.com",
					"Category": "Development"
				},
				{
					"API": "ScrapingDog",
					"Description": "Proxy API for Web scraping",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.scrapingdog.com/",
					"Category": "Development"
				},
				{
					"API": "ScreenshotAPI.net",
					"Description": "Create pixel-perfect website screenshots",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://screenshotapi.net/",
					"Category": "Development"
				},
				{
					"API": "Serialif Color",
					"Description": "Color conversion, complementary, grayscale and contrasted text",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://color.serialif.com/",
					"Category": "Development"
				},
				{
					"API": "serpstack",
					"Description": "Real-Time & Accurate Google Search Results API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://serpstack.com/",
					"Category": "Development"
				},
				{
					"API": "Sheetsu",
					"Description": "Easy google sheets integration",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://sheetsu.com/",
					"Category": "Development"
				},
				{
					"API": "SHOUTCLOUD",
					"Description": "ALL-CAPS AS A SERVICE",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://shoutcloud.io/",
					"Category": "Development"
				},
				{
					"API": "Sonar",
					"Description": "Project Sonar DNS Enumeration API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/Cgboal/SonarSearch",
					"Category": "Development"
				},
				{
					"API": "SonarQube",
					"Description": "SonarQube REST APIs to detect bugs, code smells & security vulnerabilities",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://sonarcloud.io/web_api",
					"Category": "Development"
				},
				{
					"API": "StackExchange",
					"Description": "Q&A forum for developers",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.stackexchange.com/",
					"Category": "Development"
				},
				{
					"API": "Statically",
					"Description": "A free CDN for developers",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://statically.io/",
					"Category": "Development"
				},
				{
					"API": "Supportivekoala",
					"Description": "Autogenerate images with template",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developers.supportivekoala.com/",
					"Category": "Development"
				},
				{
					"API": "Tyk",
					"Description": "Api and service management platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://tyk.io/open-source/",
					"Category": "Development"
				},
				{
					"API": "Wandbox",
					"Description": "Code compiler supporting 35+ languages mentioned at wandbox.org",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/melpon/wandbox/blob/master/kennel2/API.rst",
					"Category": "Development"
				},
				{
					"API": "WebScraping.AI",
					"Description": "Web Scraping API with built-in proxies and JS rendering",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://webscraping.ai/",
					"Category": "Development"
				},
				{
					"API": "ZenRows",
					"Description": "Web Scraping API that bypasses anti-bot solutions while offering JS rendering, and rotating proxies",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.zenrows.com/",
					"Category": "Development"
				},
				{
					"API": "Chinese Character Web",
					"Description": "Chinese character definitions and pronunciations",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "http://ccdb.hemiola.com/",
					"Category": "Dictionaries"
				},
				{
					"API": "Chinese Text Project",
					"Description": "Online open-access digital library for pre-modern Chinese texts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ctext.org/tools/api",
					"Category": "Dictionaries"
				},
				{
					"API": "Collins",
					"Description": "Bilingual Dictionary and Thesaurus Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.collinsdictionary.com/api/v1/documentation/html/",
					"Category": "Dictionaries"
				},
				{
					"API": "Free Dictionary",
					"Description": "Definitions, phonetics, pronounciations, parts of speech, examples, synonyms",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dictionaryapi.dev/",
					"Category": "Dictionaries"
				},
				{
					"API": "Indonesia Dictionary",
					"Description": "Indonesia dictionary many words",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://new-kbbi-api.herokuapp.com/",
					"Category": "Dictionaries"
				},
				{
					"API": "Lingua Robot",
					"Description": "Word definitions, pronunciations, synonyms, antonyms and others",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.linguarobot.io",
					"Category": "Dictionaries"
				},
				{
					"API": "Merriam-Webster",
					"Description": "Dictionary and Thesaurus Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dictionaryapi.com/",
					"Category": "Dictionaries"
				},
				{
					"API": "OwlBot",
					"Description": "Definitions with example sentence and photo if available",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://owlbot.info/",
					"Category": "Dictionaries"
				},
				{
					"API": "Oxford",
					"Description": "Dictionary Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://developer.oxforddictionaries.com/",
					"Category": "Dictionaries"
				},
				{
					"API": "Synonyms",
					"Description": "Synonyms, thesaurus and antonyms information for any given word",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.synonyms.com/synonyms_api.php",
					"Category": "Dictionaries"
				},
				{
					"API": "Wiktionary",
					"Description": "Collaborative dictionary data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://en.wiktionary.org/w/api.php",
					"Category": "Dictionaries"
				},
				{
					"API": "Wordnik",
					"Description": "Dictionary Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.wordnik.com",
					"Category": "Dictionaries"
				},
				{
					"API": "Words",
					"Description": "Definitions and synonyms for more than 150,000 words",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.wordsapi.com/docs/",
					"Category": "Dictionaries"
				},
				{
					"API": "Airtable",
					"Description": "Integrate with Airtable",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://airtable.com/api",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Api2Convert",
					"Description": "Online File Conversion API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.api2convert.com/",
					"Category": "Documents & Productivity"
				},
				{
					"API": "apilayer pdflayer",
					"Description": "HTML/URL to PDF",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pdflayer.com",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Asana",
					"Description": "Programmatic access to all data in your asana system",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developers.asana.com/docs",
					"Category": "Documents & Productivity"
				},
				{
					"API": "ClickUp",
					"Description": "ClickUp is a robust, cloud-based project management tool for boosting productivity",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://clickup.com/api",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Clockify",
					"Description": "Clockify's REST-based API can be used to push/pull data to/from it & integrate it with other systems",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://clockify.me/developers-api ",
					"Category": "Documents & Productivity"
				},
				{
					"API": "CloudConvert",
					"Description": "Online file converter for audio, video, document, ebook, archive, image, spreadsheet, presentation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://cloudconvert.com/api/v2",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Cloudmersive Document and Data Conversion",
					"Description": "HTML/URL to PDF/PNG, Office documents to PDF, image conversion",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://cloudmersive.com/convert-api",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Code::Stats",
					"Description": "Automatic time tracking for programmers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://codestats.net/api-docs",
					"Category": "Documents & Productivity"
				},
				{
					"API": "CraftMyPDF",
					"Description": "Generate PDF documents from templates with a drop-and-drop editor and a simple API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://craftmypdf.com",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Flowdash",
					"Description": "Automate business workflows",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.flowdash.com/docs/api-introduction",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Html2PDF",
					"Description": "HTML/URL to PDF",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://html2pdf.app/",
					"Category": "Documents & Productivity"
				},
				{
					"API": "iLovePDF",
					"Description": "Convert, merge, split, extract text and add page numbers for PDFs. Free for 250 documents/month",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developer.ilovepdf.com/",
					"Category": "Documents & Productivity"
				},
				{
					"API": "JIRA",
					"Description": "JIRA is a proprietary issue tracking product that allows bug tracking and agile project management",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.atlassian.com/server/jira/platform/rest-apis/",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Mattermost",
					"Description": "An open source platform for developer collaboration",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.mattermost.com/",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Mercury",
					"Description": "Web parser",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mercury.postlight.com/web-parser/",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Monday",
					"Description": "Programmatically access and update data inside a monday.com account",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.developer.monday.com/docs",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Notion",
					"Description": "Integrate with Notion",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.notion.com/docs/getting-started",
					"Category": "Documents & Productivity"
				},
				{
					"API": "PandaDoc",
					"Description": "DocGen and eSignatures API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://developers.pandadoc.com",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Pocket",
					"Description": "Bookmarking service",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://getpocket.com/developer/",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Podio",
					"Description": "File sharing and productivity",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.podio.com",
					"Category": "Documents & Productivity"
				},
				{
					"API": "PrexView",
					"Description": "Data from XML or JSON to PDF, HTML or Image",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://prexview.com",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Restpack",
					"Description": "Provides screenshot, HTML to PDF and content extraction APIs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://restpack.io/",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Todoist",
					"Description": "Todo Lists",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.todoist.com",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Smart Image Enhancement API",
					"Description": "Performs image upscaling by adding detail to images through multiple super-resolution algorithms",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apilayer.com/marketplace/image_enhancement-api",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Vector Express v2.0",
					"Description": "Free vector file converting API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://vector.express",
					"Category": "Documents & Productivity"
				},
				{
					"API": "WakaTime",
					"Description": "Automated time tracking leaderboards for programmers",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://wakatime.com/developers",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Zube",
					"Description": "Full stack project management",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://zube.io/docs/api",
					"Category": "Documents & Productivity"
				},
				{
					"API": "Abstract Email Validation",
					"Description": "Validate email addresses for deliverability and spam",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.abstractapi.com/email-verification-validation-api",
					"Category": "Email"
				},
				{
					"API": "apilayer mailboxlayer",
					"Description": "Email address validation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mailboxlayer.com",
					"Category": "Email"
				},
				{
					"API": "Cloudmersive Validate",
					"Description": "Validate email addresses, phone numbers, VAT numbers and domain names",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://cloudmersive.com/validate-api",
					"Category": "Email"
				},
				{
					"API": "Disify",
					"Description": "Validate and detect disposable and temporary email addresses",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.disify.com/",
					"Category": "Email"
				},
				{
					"API": "DropMail",
					"Description": "GraphQL API for creating and managing ephemeral e-mail inboxes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dropmail.me/api/#live-demo",
					"Category": "Email"
				},
				{
					"API": "EVA",
					"Description": "Validate email addresses",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://eva.pingutil.com/",
					"Category": "Email"
				},
				{
					"API": "Guerrilla Mail",
					"Description": "Disposable temporary Email addresses",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.guerrillamail.com/GuerrillaMailAPI.html",
					"Category": "Email"
				},
				{
					"API": "ImprovMX",
					"Description": "API for free email forwarding service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://improvmx.com/api",
					"Category": "Email"
				},
				{
					"API": "Kickbox",
					"Description": "Email verification API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://open.kickbox.com/",
					"Category": "Email"
				},
				{
					"API": "mail.gw",
					"Description": "10 Minute Mail",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.mail.gw",
					"Category": "Email"
				},
				{
					"API": "mail.tm",
					"Description": "Temporary Email Service",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.mail.tm",
					"Category": "Email"
				},
				{
					"API": "MailboxValidator",
					"Description": "Validate email address to improve deliverability",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mailboxvalidator.com/api-email-free",
					"Category": "Email"
				},
				{
					"API": "MailCheck.ai",
					"Description": "Prevent users to sign up with temporary email addresses",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mailcheck.ai/#documentation",
					"Category": "Email"
				},
				{
					"API": "Mailtrap",
					"Description": "A service for the safe testing of emails sent from the development and staging environments",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mailtrap.docs.apiary.io/#",
					"Category": "Email"
				},
				{
					"API": "Sendgrid",
					"Description": "A cloud-based SMTP provider that allows you to send emails without having to maintain email servers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.sendgrid.com/api-reference/",
					"Category": "Email"
				},
				{
					"API": "Sendinblue",
					"Description": "A service that provides solutions relating to marketing and/or transactional email and/or SMS",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.sendinblue.com/docs",
					"Category": "Email"
				},
				{
					"API": "Verifier",
					"Description": "Verifies that a given email is real",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://verifier.meetchopra.com/docs#/",
					"Category": "Email"
				},
				{
					"API": "chucknorris.io",
					"Description": "JSON API for hand curated Chuck Norris jokes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.chucknorris.io",
					"Category": "Entertainment"
				},
				{
					"API": "Corporate Buzz Words",
					"Description": "REST API for Corporate Buzz Words",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/sameerkumar18/corporate-bs-generator-api",
					"Category": "Entertainment"
				},
				{
					"API": "Excuser",
					"Description": "Get random excuses for various situations",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://excuser.herokuapp.com/",
					"Category": "Entertainment"
				},
				{
					"API": "Fun Fact",
					"Description": "A simple HTTPS api that can randomly select and return a fact from the FFA database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.aakhilv.me",
					"Category": "Entertainment"
				},
				{
					"API": "Imgflip",
					"Description": "Gets an array of popular memes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://imgflip.com/api",
					"Category": "Entertainment"
				},
				{
					"API": "Meme Maker",
					"Description": "REST API for create your own meme",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mememaker.github.io/API/",
					"Category": "Entertainment"
				},
				{
					"API": "NaMoMemes",
					"Description": "Memes on Narendra Modi",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/theIYD/NaMoMemes",
					"Category": "Entertainment"
				},
				{
					"API": "Random Useless Facts",
					"Description": "Get useless, but true facts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://uselessfacts.jsph.pl/",
					"Category": "Entertainment"
				},
				{
					"API": "Techy",
					"Description": "JSON and Plaintext API for tech-savvy sounding phrases",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://techy-api.vercel.app/",
					"Category": "Entertainment"
				},
				{
					"API": "Yo Momma Jokes",
					"Description": "REST API for Yo Momma Jokes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/beanboi7/yomomma-apiv2",
					"Category": "Entertainment"
				},
				{
					"API": "BreezoMeter Pollen",
					"Description": "Daily Forecast pollen conditions data for a specific location",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.breezometer.com/api-documentation/pollen-api/v2/",
					"Category": "Environment"
				},
				{
					"API": "Carbon Interface",
					"Description": "API to calculate carbon (C02) emissions estimates for common C02 emitting activities",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.carboninterface.com/",
					"Category": "Environment"
				},
				{
					"API": "Climatiq",
					"Description": "Calculate the environmental footprint created by a broad range of emission-generating activities",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.climatiq.io",
					"Category": "Environment"
				},
				{
					"API": "Cloverly",
					"Description": "API calculates the impact of common carbon-intensive activities in real time",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.cloverly.com/carbon-offset-documentation",
					"Category": "Environment"
				},
				{
					"API": "CO2 Offset",
					"Description": "API calculates and validates the carbon footprint",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://co2offset.io/api.html",
					"Category": "Environment"
				},
				{
					"API": "Danish data service Energi",
					"Description": "Open energy data from Energinet to society",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.energidataservice.dk/",
					"Category": "Environment"
				},
				{
					"API": "GrünstromIndex",
					"Description": "Green Power Index for Germany (Grünstromindex/GSI)",
					"Auth": "",
					"HTTPS": false,
					"Cors": "yes",
					"Link": "https://gruenstromindex.de/",
					"Category": "Environment"
				},
				{
					"API": "IQAir",
					"Description": "Air quality and weather data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.iqair.com/air-pollution-data-api",
					"Category": "Environment"
				},
				{
					"API": "Luchtmeetnet",
					"Description": "Predicted and actual air quality components for The Netherlands (RIVM)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api-docs.luchtmeetnet.nl/",
					"Category": "Environment"
				},
				{
					"API": "National Grid ESO",
					"Description": "Open data from Great Britain’s Electricity System Operator",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.nationalgrideso.com/",
					"Category": "Environment"
				},
				{
					"API": "OpenAQ",
					"Description": "Open air quality data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.openaq.org/",
					"Category": "Environment"
				},
				{
					"API": "PM2.5 Open Data Portal",
					"Description": "Open low-cost PM2.5 sensor data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pm25.lass-net.org/#apis",
					"Category": "Environment"
				},
				{
					"API": "PM25.in",
					"Description": "Air quality of China",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.pm25.in/api_doc",
					"Category": "Environment"
				},
				{
					"API": "PVWatts",
					"Description": "Energy production photovoltaic (PV) energy systems",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.nrel.gov/docs/solar/pvwatts/v6/",
					"Category": "Environment"
				},
				{
					"API": "Srp Energy",
					"Description": "Hourly usage energy report for Srp customers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://srpenergy-api-client-python.readthedocs.io/en/latest/api.html",
					"Category": "Environment"
				},
				{
					"API": "UK Carbon Intensity",
					"Description": "The Official Carbon Intensity API for Great Britain developed by National Grid",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://carbon-intensity.github.io/api-definitions/#carbon-intensity-api-v1-0-0",
					"Category": "Environment"
				},
				{
					"API": "Website Carbon",
					"Description": "API to estimate the carbon footprint of loading web pages",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.websitecarbon.com/",
					"Category": "Environment"
				},
				{
					"API": "Eventbrite",
					"Description": "Find events",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.eventbrite.com/platform/api/",
					"Category": "Events"
				},
				{
					"API": "SeatGeek",
					"Description": "Search events, venues and performers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://platform.seatgeek.com/",
					"Category": "Events"
				},
				{
					"API": "Ticketmaster",
					"Description": "Search events, attractions, or venues",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://developer.ticketmaster.com/products-and-docs/apis/getting-started/",
					"Category": "Events"
				},
				{
					"API": "Abstract VAT Validation",
					"Description": "Validate VAT numbers and calculate VAT rates",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.abstractapi.com/vat-validation-rates-api",
					"Category": "Finance"
				},
				{
					"API": "Aletheia",
					"Description": "Insider trading data, earnings call analysis, financial statements, and more",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://aletheiaapi.com/",
					"Category": "Finance"
				},
				{
					"API": "Alpaca",
					"Description": "Realtime and historical market data on all US equities and ETFs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://alpaca.markets/docs/api-documentation/api-v2/market-data/alpaca-data-api-v2/",
					"Category": "Finance"
				},
				{
					"API": "Alpha Vantage",
					"Description": "Realtime and historical stock data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.alphavantage.co/",
					"Category": "Finance"
				},
				{
					"API": "apilayer marketstack",
					"Description": "Real-Time, Intraday & Historical Market Data API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://marketstack.com/",
					"Category": "Finance"
				},
				{
					"API": "Banco do Brasil",
					"Description": "All Banco do Brasil financial transaction APIs",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developers.bb.com.br/home",
					"Category": "Finance"
				},
				{
					"API": "Bank Data API",
					"Description": "Instant IBAN and SWIFT number validation across the globe",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apilayer.com/marketplace/bank_data-api",
					"Category": "Finance"
				},
				{
					"API": "Billplz",
					"Description": "Payment platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.billplz.com/api",
					"Category": "Finance"
				},
				{
					"API": "Binlist",
					"Description": "Public access to a database of IIN/BIN information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://binlist.net/",
					"Category": "Finance"
				},
				{
					"API": "Boleto.Cloud",
					"Description": "A api to generate boletos in Brazil",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://boleto.cloud/",
					"Category": "Finance"
				},
				{
					"API": "Citi",
					"Description": "All Citigroup account and statement data APIs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://sandbox.developerhub.citi.com/api-catalog-list",
					"Category": "Finance"
				},
				{
					"API": "Econdb",
					"Description": "Global macroeconomic data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.econdb.com/api/",
					"Category": "Finance"
				},
				{
					"API": "Fed Treasury",
					"Description": "U.S. Department of the Treasury Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://fiscaldata.treasury.gov/api-documentation/",
					"Category": "Finance"
				},
				{
					"API": "Finage",
					"Description": "Finage is a stock, currency, cryptocurrency, indices, and ETFs real-time & historical data provider",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://finage.co.uk",
					"Category": "Finance"
				},
				{
					"API": "Financial Modeling Prep",
					"Description": "Realtime and historical stock data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://site.financialmodelingprep.com/developer/docs",
					"Category": "Finance"
				},
				{
					"API": "Finnhub",
					"Description": "Real-Time RESTful APIs and Websocket for Stocks, Currencies, and Crypto",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://finnhub.io/docs/api",
					"Category": "Finance"
				},
				{
					"API": "FRED",
					"Description": "Economic data from the Federal Reserve Bank of St. Louis",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://fred.stlouisfed.org/docs/api/fred/",
					"Category": "Finance"
				},
				{
					"API": "Front Accounting APIs",
					"Description": "Front accounting is multilingual and multicurrency software for small businesses",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://frontaccounting.com/fawiki/index.php?n=Devel.SimpleAPIModule",
					"Category": "Finance"
				},
				{
					"API": "Hotstoks",
					"Description": "Stock market data powered by SQL",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://hotstoks.com?utm_source=public-apis",
					"Category": "Finance"
				},
				{
					"API": "IEX Cloud",
					"Description": "Realtime & Historical Stock and Market Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://iexcloud.io/docs/api/",
					"Category": "Finance"
				},
				{
					"API": "IG",
					"Description": "Spreadbetting and CFD Market Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://labs.ig.com/gettingstarted",
					"Category": "Finance"
				},
				{
					"API": "Indian Mutual Fund",
					"Description": "Get complete history of India Mutual Funds Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mfapi.in/",
					"Category": "Finance"
				},
				{
					"API": "Intrinio",
					"Description": "A wide selection of financial data feeds",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://intrinio.com/",
					"Category": "Finance"
				},
				{
					"API": "Klarna",
					"Description": "Klarna payment and shopping service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.klarna.com/klarna-payments/api/payments-api/",
					"Category": "Finance"
				},
				{
					"API": "MercadoPago",
					"Description": "Mercado Pago API reference - all the information you need to develop your integrations",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mercadopago.com.br/developers/es/reference",
					"Category": "Finance"
				},
				{
					"API": "Mono",
					"Description": "Connect with users’ bank accounts and access transaction data in Africa",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mono.co/",
					"Category": "Finance"
				},
				{
					"API": "Moov",
					"Description": "The Moov API makes it simple for platforms to send, receive, and store money",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.moov.io/api/",
					"Category": "Finance"
				},
				{
					"API": "Nordigen",
					"Description": "Connect to bank accounts using official bank APIs and get raw transaction data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://nordigen.com/en/account_information_documenation/integration/quickstart_guide/",
					"Category": "Finance"
				},
				{
					"API": "OpenFIGI",
					"Description": "Equity, index, futures, options symbology from Bloomberg LP",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.openfigi.com/api",
					"Category": "Finance"
				},
				{
					"API": "Plaid",
					"Description": "Connect with user's bank accounts and access transaction data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://plaid.com/",
					"Category": "Finance"
				},
				{
					"API": "Polygon",
					"Description": "Historical stock market data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://polygon.io/",
					"Category": "Finance"
				},
				{
					"API": "Portfolio Optimizer",
					"Description": "Portfolio analysis and optimization",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://portfoliooptimizer.io/",
					"Category": "Finance"
				},
				{
					"API": "Razorpay IFSC",
					"Description": "Indian Financial Systems Code (Bank Branch Codes)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://razorpay.com/docs/",
					"Category": "Finance"
				},
				{
					"API": "Real Time Finance",
					"Description": "Websocket API to access realtime stock data",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://github.com/Real-time-finance/finance-websocket-API/",
					"Category": "Finance"
				},
				{
					"API": "SEC EDGAR Data",
					"Description": "API to access annual reports of public US companies",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.sec.gov/edgar/sec-api-documentation",
					"Category": "Finance"
				},
				{
					"API": "SmartAPI",
					"Description": "Gain access to set of <SmartAPI> and create end-to-end broking services",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://smartapi.angelbroking.com/",
					"Category": "Finance"
				},
				{
					"API": "StockData",
					"Description": "Real-Time, Intraday & Historical Market Data, News and Sentiment API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.StockData.org",
					"Category": "Finance"
				},
				{
					"API": "Styvio",
					"Description": "Realtime and historical stock data and current stock sentiment",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.Styvio.com",
					"Category": "Finance"
				},
				{
					"API": "Tax Data API",
					"Description": "Instant VAT number and tax validation across the globe",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unkown",
					"Link": "https://apilayer.com/marketplace/tax_data-api",
					"Category": "Finance"
				},
				{
					"API": "Tradier",
					"Description": "US equity/option market data (delayed, intraday, historical)",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developer.tradier.com",
					"Category": "Finance"
				},
				{
					"API": "Twelve Data",
					"Description": "Stock market data (real-time & historical)",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://twelvedata.com/",
					"Category": "Finance"
				},
				{
					"API": "WallstreetBets",
					"Description": "WallstreetBets Stock Comments Sentiment Analysis",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dashboard.nbshare.io/apps/reddit/api/",
					"Category": "Finance"
				},
				{
					"API": "Yahoo Finance",
					"Description": "Real time low latency Yahoo Finance API for stock market, crypto currencies, and currency exchange",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.yahoofinanceapi.com/",
					"Category": "Finance"
				},
				{
					"API": "YNAB",
					"Description": "Budgeting & Planning",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.youneedabudget.com/",
					"Category": "Finance"
				},
				{
					"API": "Zoho Books",
					"Description": "Online accounting software, built for your business",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.zoho.com/books/api/v3/",
					"Category": "Finance"
				},
				{
					"API": "BaconMockup",
					"Description": "Resizable bacon placeholder images",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://baconmockup.com/",
					"Category": "Food & Drink"
				},
				{
					"API": "Chomp",
					"Description": "Data about various grocery products and foods",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://chompthis.com/api/",
					"Category": "Food & Drink"
				},
				{
					"API": "Coffee",
					"Description": "Random pictures of coffee",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://coffee.alexflipnote.dev/",
					"Category": "Food & Drink"
				},
				{
					"API": "Edamam nutrition",
					"Description": "Nutrition Analysis",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.edamam.com/edamam-docs-nutrition-api",
					"Category": "Food & Drink"
				},
				{
					"API": "Edamam recipes",
					"Description": "Recipe Search",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.edamam.com/edamam-docs-recipe-api",
					"Category": "Food & Drink"
				},
				{
					"API": "Foodish",
					"Description": "Random pictures of food dishes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/surhud004/Foodish#readme",
					"Category": "Food & Drink"
				},
				{
					"API": "Fruityvice",
					"Description": "Data about all kinds of fruit",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.fruityvice.com",
					"Category": "Food & Drink"
				},
				{
					"API": "Kroger",
					"Description": "Supermarket Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.kroger.com/reference",
					"Category": "Food & Drink"
				},
				{
					"API": "LCBO",
					"Description": "Alcohol",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://lcboapi.com/",
					"Category": "Food & Drink"
				},
				{
					"API": "Open Brewery DB",
					"Description": "Breweries, Cideries and Craft Beer Bottle Shops",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.openbrewerydb.org",
					"Category": "Food & Drink"
				},
				{
					"API": "Open Food Facts",
					"Description": "Food Products Database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://world.openfoodfacts.org/data",
					"Category": "Food & Drink"
				},
				{
					"API": "PunkAPI",
					"Description": "Brewdog Beer Recipes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://punkapi.com/",
					"Category": "Food & Drink"
				},
				{
					"API": "Rustybeer",
					"Description": "Beer brewing tools",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://rustybeer.herokuapp.com/",
					"Category": "Food & Drink"
				},
				{
					"API": "Spoonacular",
					"Description": "Recipes, Food Products, and Meal Planning",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://spoonacular.com/food-api",
					"Category": "Food & Drink"
				},
				{
					"API": "Systembolaget",
					"Description": "Govornment owned liqour store in Sweden",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api-portal.systembolaget.se",
					"Category": "Food & Drink"
				},
				{
					"API": "TacoFancy",
					"Description": "Community-driven taco database",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://github.com/evz/tacofancy-api",
					"Category": "Food & Drink"
				},
				{
					"API": "Tasty",
					"Description": "API to query data about recipe, plan, ingredients",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/apidojo/api/tasty/",
					"Category": "Food & Drink"
				},
				{
					"API": "The Report of the Week",
					"Description": "Food & Drink Reviews",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/andyklimczak/TheReportOfTheWeek-API",
					"Category": "Food & Drink"
				},
				{
					"API": "TheCocktailDB",
					"Description": "Cocktail Recipes",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.thecocktaildb.com/api.php",
					"Category": "Food & Drink"
				},
				{
					"API": "TheMealDB",
					"Description": "Meal Recipes",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.themealdb.com/api.php",
					"Category": "Food & Drink"
				},
				{
					"API": "Untappd",
					"Description": "Social beer sharing",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://untappd.com/api/docs",
					"Category": "Food & Drink"
				},
				{
					"API": "What's on the menu?",
					"Description": "NYPL human-transcribed historical menu collection",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://nypl.github.io/menus-api/",
					"Category": "Food & Drink"
				},
				{
					"API": "WhiskyHunter",
					"Description": "Past online whisky auctions statistical data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://whiskyhunter.net/api/",
					"Category": "Food & Drink"
				},
				{
					"API": "Zestful",
					"Description": "Parse recipe ingredients",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://zestfuldata.com/",
					"Category": "Food & Drink"
				},
				{
					"API": "Age of Empires II",
					"Description": "Get information about Age of Empires II resources",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://age-of-empires-2-api.herokuapp.com",
					"Category": "Games & Comics"
				},
				{
					"API": "AmiiboAPI",
					"Description": "Nintendo Amiibo Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://amiiboapi.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Animal Crossing: New Horizons",
					"Description": "API for critters, fossils, art, music, furniture and villagers",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://acnhapi.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Autochess VNG",
					"Description": "Rest Api for Autochess VNG",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/didadadida93/autochess-vng-api",
					"Category": "Games & Comics"
				},
				{
					"API": "Barter.VG",
					"Description": "Provides information about Game, DLC, Bundles, Giveaways, Trading",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/bartervg/barter.vg/wiki",
					"Category": "Games & Comics"
				},
				{
					"API": "Battle.net",
					"Description": "Diablo III, Hearthstone, StarCraft II and World of Warcraft game data APIs",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://develop.battle.net/documentation/guides/getting-started",
					"Category": "Games & Comics"
				},
				{
					"API": "Board Game Geek",
					"Description": "Board games, RPG and videogames",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://boardgamegeek.com/wiki/page/BGG_XML_API2",
					"Category": "Games & Comics"
				},
				{
					"API": "Brawl Stars",
					"Description": "Brawl Stars Game Information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.brawlstars.com",
					"Category": "Games & Comics"
				},
				{
					"API": "Bugsnax",
					"Description": "Get information about Bugsnax",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.bugsnaxapi.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "CheapShark",
					"Description": "Steam/PC Game Prices and Deals",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.cheapshark.com/api",
					"Category": "Games & Comics"
				},
				{
					"API": "Chess.com",
					"Description": "Chess.com read-only REST API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.chess.com/news/view/published-data-api",
					"Category": "Games & Comics"
				},
				{
					"API": "Chuck Norris Database",
					"Description": "Jokes",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.icndb.com/api/",
					"Category": "Games & Comics"
				},
				{
					"API": "Clash of Clans",
					"Description": "Clash of Clans Game Information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.clashofclans.com",
					"Category": "Games & Comics"
				},
				{
					"API": "Clash Royale",
					"Description": "Clash Royale Game Information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.clashroyale.com",
					"Category": "Games & Comics"
				},
				{
					"API": "Comic Vine",
					"Description": "Comics",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://comicvine.gamespot.com/api/documentation",
					"Category": "Games & Comics"
				},
				{
					"API": "Crafatar",
					"Description": "API for Minecraft skins and faces",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://crafatar.com",
					"Category": "Games & Comics"
				},
				{
					"API": "Cross Universe",
					"Description": "Cross Universe Card Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://crossuniverse.psychpsyo.com/apiDocs.html",
					"Category": "Games & Comics"
				},
				{
					"API": "Deck of Cards",
					"Description": "Deck of Cards",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://deckofcardsapi.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Destiny The Game",
					"Description": "Bungie Platform API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bungie-net.github.io/multi/index.html",
					"Category": "Games & Comics"
				},
				{
					"API": "Digimon Information",
					"Description": "Provides information about digimon creatures",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://digimon-api.vercel.app/",
					"Category": "Games & Comics"
				},
				{
					"API": "Digimon TCG",
					"Description": "Search for Digimon cards in digimoncard.io",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://documenter.getpostman.com/view/14059948/TzecB4fH",
					"Category": "Games & Comics"
				},
				{
					"API": "Disney",
					"Description": "Information of Disney characters",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://disneyapi.dev",
					"Category": "Games & Comics"
				},
				{
					"API": "Dota 2",
					"Description": "Provides information about Player stats , Match stats, Rankings for Dota 2",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.opendota.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Dungeons and Dragons",
					"Description": "Reference for 5th edition spells, classes, monsters, and more",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "https://www.dnd5eapi.co/docs/",
					"Category": "Games & Comics"
				},
				{
					"API": "Dungeons and Dragons (Alternate)",
					"Description": "Includes all monsters and spells from the SRD (System Reference Document) as well as a search API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://open5e.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Eve Online",
					"Description": "Third-Party Developer Documentation",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://esi.evetech.net/ui",
					"Category": "Games & Comics"
				},
				{
					"API": "FFXIV Collect",
					"Description": "Final Fantasy XIV data on collectables",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://ffxivcollect.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "FIFA Ultimate Team",
					"Description": "FIFA Ultimate Team items API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.easports.com/fifa/ultimate-team/api/fut/item",
					"Category": "Games & Comics"
				},
				{
					"API": "Final Fantasy XIV",
					"Description": "Final Fantasy XIV Game data API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://xivapi.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Fortnite",
					"Description": "Fortnite Stats",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://fortnitetracker.com/site-api",
					"Category": "Games & Comics"
				},
				{
					"API": "Forza",
					"Description": "Show random image of car from Forza",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.forza-api.tk",
					"Category": "Games & Comics"
				},
				{
					"API": "FreeToGame",
					"Description": "Free-To-Play Games Database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.freetogame.com/api-doc",
					"Category": "Games & Comics"
				},
				{
					"API": "Fun Facts",
					"Description": "Random Fun Facts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://asli-fun-fact-api.herokuapp.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "FunTranslations",
					"Description": "Translate Text into funny languages",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.funtranslations.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "GamerPower",
					"Description": "Game Giveaways Tracker",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.gamerpower.com/api-read",
					"Category": "Games & Comics"
				},
				{
					"API": "GDBrowser",
					"Description": "Easy way to use the Geometry Dash Servers",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://gdbrowser.com/api",
					"Category": "Games & Comics"
				},
				{
					"API": "Geek-Jokes",
					"Description": "Fetch a random geeky/programming related joke for use in all sorts of applications",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/sameerkumar18/geek-joke-api",
					"Category": "Games & Comics"
				},
				{
					"API": "Genshin Impact",
					"Description": "Genshin Impact game data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://genshin.dev",
					"Category": "Games & Comics"
				},
				{
					"API": "Giant Bomb",
					"Description": "Video Games",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.giantbomb.com/api/documentation",
					"Category": "Games & Comics"
				},
				{
					"API": "GraphQL Pokemon",
					"Description": "GraphQL powered Pokemon API. Supports generations 1 through 8",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/favware/graphql-pokemon",
					"Category": "Games & Comics"
				},
				{
					"API": "Guild Wars 2",
					"Description": "Guild Wars 2 Game Information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://wiki.guildwars2.com/wiki/API:Main",
					"Category": "Games & Comics"
				},
				{
					"API": "GW2Spidy",
					"Description": "GW2Spidy API, Items data on the Guild Wars 2 Trade Market",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/rubensayshi/gw2spidy/wiki",
					"Category": "Games & Comics"
				},
				{
					"API": "Halo",
					"Description": "Halo 5 and Halo Wars 2 Information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.haloapi.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Hearthstone",
					"Description": "Hearthstone Cards Information",
					"Auth": "X-Mashape-Key",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://hearthstoneapi.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Humble Bundle",
					"Description": "Humble Bundle's current bundles",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/Ziggoto/api/humble-bundle",
					"Category": "Games & Comics"
				},
				{
					"API": "Humor",
					"Description": "Humor, Jokes, and Memes",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://humorapi.com",
					"Category": "Games & Comics"
				},
				{
					"API": "Hypixel",
					"Description": "Hypixel player stats",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.hypixel.net/",
					"Category": "Games & Comics"
				},
				{
					"API": "Hyrule Compendium",
					"Description": "Data on all interactive items from The Legend of Zelda: BOTW",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/gadhagod/Hyrule-Compendium-API",
					"Category": "Games & Comics"
				},
				{
					"API": "Hytale",
					"Description": "Hytale blog posts and jobs",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://hytale-api.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "IGDB.com",
					"Description": "Video Game Database",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api-docs.igdb.com",
					"Category": "Games & Comics"
				},
				{
					"API": "JokeAPI",
					"Description": "Programming, Miscellaneous and Dark Jokes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://sv443.net/jokeapi/v2/",
					"Category": "Games & Comics"
				},
				{
					"API": "Jokes One",
					"Description": "Joke of the day and large category of jokes accessible via REST API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://jokes.one/api/joke/",
					"Category": "Games & Comics"
				},
				{
					"API": "Jservice",
					"Description": "Jeopardy Question Database",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://jservice.io",
					"Category": "Games & Comics"
				},
				{
					"API": "Lichess",
					"Description": "Access to all data of users, games, puzzles and etc on Lichess",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://lichess.org/api",
					"Category": "Games & Comics"
				},
				{
					"API": "Magic The Gathering",
					"Description": "Magic The Gathering Game Information",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://magicthegathering.io/",
					"Category": "Games & Comics"
				},
				{
					"API": "Mario Kart Tour",
					"Description": "API for Drivers, Karts, Gliders and Courses",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mario-kart-tour-api.herokuapp.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Marvel",
					"Description": "Marvel Comics",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.marvel.com",
					"Category": "Games & Comics"
				},
				{
					"API": "Minecraft Server Status",
					"Description": "API to get Information about a Minecraft Server",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://api.mcsrvstat.us",
					"Category": "Games & Comics"
				},
				{
					"API": "MMO Games",
					"Description": "MMO Games Database, News and Giveaways",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://www.mmobomb.com/api",
					"Category": "Games & Comics"
				},
				{
					"API": "mod.io",
					"Description": "Cross Platform Mod API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.mod.io",
					"Category": "Games & Comics"
				},
				{
					"API": "Mojang",
					"Description": "Mojang / Minecraft API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://wiki.vg/Mojang_API",
					"Category": "Games & Comics"
				},
				{
					"API": "Monster Hunter World",
					"Description": "Monster Hunter World data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.mhw-db.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Open Trivia",
					"Description": "Trivia Questions",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opentdb.com/api_config.php",
					"Category": "Games & Comics"
				},
				{
					"API": "PandaScore",
					"Description": "E-sports games and results",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.pandascore.co/",
					"Category": "Games & Comics"
				},
				{
					"API": "Path of Exile",
					"Description": "Path of Exile Game Information",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.pathofexile.com/developer/docs",
					"Category": "Games & Comics"
				},
				{
					"API": "PlayerDB",
					"Description": "Query Minecraft, Steam and XBox Accounts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://playerdb.co/",
					"Category": "Games & Comics"
				},
				{
					"API": "Pokéapi",
					"Description": "Pokémon Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pokeapi.co",
					"Category": "Games & Comics"
				},
				{
					"API": "PokéAPI (GraphQL)",
					"Description": "The Unofficial GraphQL for PokeAPI",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/mazipan/graphql-pokeapi",
					"Category": "Games & Comics"
				},
				{
					"API": "Pokémon TCG",
					"Description": "Pokémon TCG Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pokemontcg.io",
					"Category": "Games & Comics"
				},
				{
					"API": "Psychonauts",
					"Description": "Psychonauts World Characters Information and PSI Powers",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://psychonauts-api.netlify.app/",
					"Category": "Games & Comics"
				},
				{
					"API": "PUBG",
					"Description": "Access in-game PUBG data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developer.pubg.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "Puyo Nexus",
					"Description": "Puyo Puyo information from Puyo Nexus Wiki",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/deltadex7/puyodb-api-deno",
					"Category": "Games & Comics"
				},
				{
					"API": "quizapi.io",
					"Description": "Access to various kind of quiz questions",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://quizapi.io/",
					"Category": "Games & Comics"
				},
				{
					"API": "Raider",
					"Description": "Provides detailed character and guild rankings for Raiding and Mythic+ content in World of Warcraft",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://raider.io/api",
					"Category": "Games & Comics"
				},
				{
					"API": "RAWG.io",
					"Description": "500,000+ games for 50 platforms including mobiles",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rawg.io/apidocs",
					"Category": "Games & Comics"
				},
				{
					"API": "Rick and Morty",
					"Description": "All the Rick and Morty information, including images",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://rickandmortyapi.com",
					"Category": "Games & Comics"
				},
				{
					"API": "Riot Games",
					"Description": "League of Legends Game Information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.riotgames.com/",
					"Category": "Games & Comics"
				},
				{
					"API": "RPS 101",
					"Description": "Rock, Paper, Scissors with 101 objects",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://rps101.pythonanywhere.com/api",
					"Category": "Games & Comics"
				},
				{
					"API": "RuneScape",
					"Description": "RuneScape and OSRS RPGs information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://runescape.wiki/w/Application_programming_interface",
					"Category": "Games & Comics"
				},
				{
					"API": "Sakura CardCaptor",
					"Description": "Sakura CardCaptor Cards Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/JessVel/sakura-card-captor-api",
					"Category": "Games & Comics"
				},
				{
					"API": "Scryfall",
					"Description": "Magic: The Gathering database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://scryfall.com/docs/api",
					"Category": "Games & Comics"
				},
				{
					"API": "SpaceTradersAPI",
					"Description": "A playable inter-galactic space trading MMOAPI",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://spacetraders.io?rel=pub-apis",
					"Category": "Games & Comics"
				},
				{
					"API": "Steam",
					"Description": "Steam Web API documentation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://steamapi.xpaw.me/",
					"Category": "Games & Comics"
				},
				{
					"API": "Steam",
					"Description": "Internal Steam Web API documentation",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/Revadike/InternalSteamWebAPI/wiki",
					"Category": "Games & Comics"
				},
				{
					"API": "SuperHeroes",
					"Description": "All SuperHeroes and Villains data from all universes under a single API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://superheroapi.com",
					"Category": "Games & Comics"
				},
				{
					"API": "TCGdex",
					"Description": "Multi languages Pokémon TCG Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.tcgdex.net/docs",
					"Category": "Games & Comics"
				},
				{
					"API": "Tebex",
					"Description": "Tebex API for information about game purchases",
					"Auth": "X-Mashape-Key",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://docs.tebex.io/plugin/",
					"Category": "Games & Comics"
				},
				{
					"API": "TETR.IO",
					"Description": "TETR.IO Tetra Channel API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tetr.io/about/api/",
					"Category": "Games & Comics"
				},
				{
					"API": "Tronald Dump",
					"Description": "The dumbest things Donald Trump has ever said",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.tronalddump.io/",
					"Category": "Games & Comics"
				},
				{
					"API": "Universalis",
					"Description": "Final Fantasy XIV market board data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://universalis.app/docs/index.html",
					"Category": "Games & Comics"
				},
				{
					"API": "Valorant (non-official)",
					"Description": "An extensive API containing data of most Valorant in-game items, assets and more",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://valorant-api.com",
					"Category": "Games & Comics"
				},
				{
					"API": "Warface (non-official)",
					"Description": "Official API proxy with better data structure and more features",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://api.wfstats.cf",
					"Category": "Games & Comics"
				},
				{
					"API": "Wargaming.net",
					"Description": "Wargaming.net info and stats",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://developers.wargaming.net/",
					"Category": "Games & Comics"
				},
				{
					"API": "When is next MCU film",
					"Description": "Upcoming MCU film information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/DiljotSG/MCU-Countdown/blob/develop/docs/API.md",
					"Category": "Games & Comics"
				},
				{
					"API": "xkcd",
					"Description": "Retrieve xkcd comics as JSON",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://xkcd.com/json.html",
					"Category": "Games & Comics"
				},
				{
					"API": "Yu-Gi-Oh!",
					"Description": "Yu-Gi-Oh! TCG Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://db.ygoprodeck.com/api-guide/",
					"Category": "Games & Comics"
				},
				{
					"API": "Abstract IP Geolocation",
					"Description": "Geolocate website visitors from their IPs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.abstractapi.com/ip-geolocation-api",
					"Category": "Geocoding"
				},
				{
					"API": "Actinia Grass GIS",
					"Description": "Actinia is an open source REST API for geographical data that uses GRASS GIS",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://actinia.mundialis.de/api_docs/",
					"Category": "Geocoding"
				},
				{
					"API": "administrative-divisons-db",
					"Description": "Get all administrative divisions of a country",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/kamikazechaser/administrative-divisions-db",
					"Category": "Geocoding"
				},
				{
					"API": "adresse.data.gouv.fr",
					"Description": "Address database of France, geocoding and reverse",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://adresse.data.gouv.fr",
					"Category": "Geocoding"
				},
				{
					"API": "Airtel IP",
					"Description": "IP Geolocation API. Collecting data from multiple sources",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://sys.airtel.lv/ip2country/1.1.1.1/?full=true",
					"Category": "Geocoding"
				},
				{
					"API": "Apiip",
					"Description": "Get location information by IP address",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://apiip.net/",
					"Category": "Geocoding"
				},
				{
					"API": "apilayer ipstack",
					"Description": "Locate and identify website visitors by IP address",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ipstack.com/",
					"Category": "Geocoding"
				},
				{
					"API": "Battuta",
					"Description": "A (country/region/city) in-cascade location API",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://battuta.medunes.net",
					"Category": "Geocoding"
				},
				{
					"API": "BigDataCloud",
					"Description": "Provides fast and accurate IP geolocation APIs along with security checks and confidence area",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.bigdatacloud.com/ip-geolocation-apis",
					"Category": "Geocoding"
				},
				{
					"API": "Bing Maps",
					"Description": "Create/customize digital maps based on Bing Maps data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.microsoft.com/maps/",
					"Category": "Geocoding"
				},
				{
					"API": "bng2latlong",
					"Description": "Convert British OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.getthedata.com/bng2latlong",
					"Category": "Geocoding"
				},
				{
					"API": "Cartes.io",
					"Description": "Create maps and markers for anything",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/M-Media-Group/Cartes.io/wiki/API",
					"Category": "Geocoding"
				},
				{
					"API": "Cep.la",
					"Description": "Brazil RESTful API to find information about streets, zip codes, neighborhoods, cities and states",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://cep.la/",
					"Category": "Geocoding"
				},
				{
					"API": "CitySDK",
					"Description": "Open APIs for select European cities",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://www.citysdk.eu/citysdk-toolkit/",
					"Category": "Geocoding"
				},
				{
					"API": "Country",
					"Description": "Get your visitor's country from their IP",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "http://country.is/",
					"Category": "Geocoding"
				},
				{
					"API": "CountryStateCity",
					"Description": "World countries, states, regions, provinces, cities & towns in JSON, SQL, XML, YAML, & CSV format",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://countrystatecity.in/",
					"Category": "Geocoding"
				},
				{
					"API": "Ducks Unlimited",
					"Description": "API explorer that gives a query URL with a JSON response of locations and cities",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://gis.ducks.org/datasets/du-university-chapters/api",
					"Category": "Geocoding"
				},
				{
					"API": "FreeGeoIP",
					"Description": "Free geo ip information, no registration required. 15k/hour rate limit",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://freegeoip.app/",
					"Category": "Geocoding"
				},
				{
					"API": "GeoApi",
					"Description": "French geographical data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.gouv.fr/api/geoapi.html",
					"Category": "Geocoding"
				},
				{
					"API": "Geoapify",
					"Description": "Forward and reverse geocoding, address autocomplete",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.geoapify.com/api/geocoding-api/",
					"Category": "Geocoding"
				},
				{
					"API": "Geocod.io",
					"Description": "Address geocoding / reverse geocoding in bulk",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.geocod.io/",
					"Category": "Geocoding"
				},
				{
					"API": "Geocode.xyz",
					"Description": "Provides worldwide forward/reverse geocoding, batch geocoding and geoparsing",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://geocode.xyz/api",
					"Category": "Geocoding"
				},
				{
					"API": "Geocodify.com",
					"Description": "Worldwide geocoding, geoparsing and autocomplete for addresses",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://geocodify.com/",
					"Category": "Geocoding"
				},
				{
					"API": "Geodata.gov.gr",
					"Description": "Open geospatial data and API service for Greece",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://geodata.gov.gr/en/",
					"Category": "Geocoding"
				},
				{
					"API": "GeoDataSource",
					"Description": "Geocoding of city name by using latitude and longitude coordinates",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.geodatasource.com/web-service",
					"Category": "Geocoding"
				},
				{
					"API": "GeoDB Cities",
					"Description": "Get global city, region, and country data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://geodb-cities-api.wirefreethought.com/",
					"Category": "Geocoding"
				},
				{
					"API": "GeographQL",
					"Description": "A Country, State, and City GraphQL API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://geographql.netlify.app",
					"Category": "Geocoding"
				},
				{
					"API": "GeoJS",
					"Description": "IP geolocation with ChatOps integration",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.geojs.io/",
					"Category": "Geocoding"
				},
				{
					"API": "Geokeo",
					"Description": "Geokeo geocoding service- with 2500 free api requests daily",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://geokeo.com",
					"Category": "Geocoding"
				},
				{
					"API": "GeoNames",
					"Description": "Place names and other geographical data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.geonames.org/export/web-services.html",
					"Category": "Geocoding"
				},
				{
					"API": "geoPlugin",
					"Description": "IP geolocation and currency conversion",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.geoplugin.com",
					"Category": "Geocoding"
				},
				{
					"API": "Google Earth Engine",
					"Description": "A cloud-based platform for planetary-scale environmental data analysis",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/earth-engine/",
					"Category": "Geocoding"
				},
				{
					"API": "Google Maps",
					"Description": "Create/customize digital maps based on Google Maps data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/maps/",
					"Category": "Geocoding"
				},
				{
					"API": "Graph Countries",
					"Description": "Country-related data like currencies, languages, flags, regions+subregions and bordering countries",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/lennertVanSever/graphcountries",
					"Category": "Geocoding"
				},
				{
					"API": "HelloSalut",
					"Description": "Get hello translation following user language",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://fourtonfish.com/project/hellosalut-api/",
					"Category": "Geocoding"
				},
				{
					"API": "HERE Maps",
					"Description": "Create/customize digital maps based on HERE Maps data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.here.com",
					"Category": "Geocoding"
				},
				{
					"API": "Hirak IP to Country",
					"Description": "Ip to location with country code, currency code & currency name, fast response, unlimited requests",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://iplocation.hirak.site/",
					"Category": "Geocoding"
				},
				{
					"API": "Hong Kong GeoData Store",
					"Description": "API for accessing geo-data of Hong Kong",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://geodata.gov.hk/gs/",
					"Category": "Geocoding"
				},
				{
					"API": "IBGE",
					"Description": "Aggregate services of IBGE (Brazilian Institute of Geography and Statistics)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://servicodados.ibge.gov.br/api/docs/",
					"Category": "Geocoding"
				},
				{
					"API": "IP 2 Country",
					"Description": "Map an IP to a country",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ip2country.info",
					"Category": "Geocoding"
				},
				{
					"API": "IP Address Details",
					"Description": "Find geolocation with ip address",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ipinfo.io/",
					"Category": "Geocoding"
				},
				{
					"API": "IP Vigilante",
					"Description": "Free IP Geolocation API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.ipvigilante.com/",
					"Category": "Geocoding"
				},
				{
					"API": "ip-api",
					"Description": "Find location with IP address or domain",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://ip-api.com/docs",
					"Category": "Geocoding"
				},
				{
					"API": "IP2Location",
					"Description": "IP geolocation web service to get more than 55 parameters",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.ip2location.com/web-service/ip2location",
					"Category": "Geocoding"
				},
				{
					"API": "IP2Proxy",
					"Description": "Detect proxy and VPN using IP address",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.ip2location.com/web-service/ip2proxy",
					"Category": "Geocoding"
				},
				{
					"API": "ipapi.co",
					"Description": "Find IP address location information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://ipapi.co/api/#introduction",
					"Category": "Geocoding"
				},
				{
					"API": "ipapi.com",
					"Description": "Real-time Geolocation & Reverse IP Lookup REST API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ipapi.com/",
					"Category": "Geocoding"
				},
				{
					"API": "IPGEO",
					"Description": "Unlimited free IP Address API with useful information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.techniknews.net/ipgeo/",
					"Category": "Geocoding"
				},
				{
					"API": "ipgeolocation",
					"Description": "IP Geolocation AP with free plan 30k requests per month",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://ipgeolocation.io/",
					"Category": "Geocoding"
				},
				{
					"API": "IPInfoDB",
					"Description": "Free Geolocation tools and APIs for country, region, city and time zone lookup by IP address",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.ipinfodb.com/api",
					"Category": "Geocoding"
				},
				{
					"API": "ipstack",
					"Description": "Locate and identify website visitors by IP address",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ipstack.com/",
					"Category": "Geocoding"
				},
				{
					"API": "Kakao Maps",
					"Description": "Kakao Maps provide multiple APIs for Korean maps",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apis.map.kakao.com",
					"Category": "Geocoding"
				},
				{
					"API": "keycdn IP Location Finder",
					"Description": "Get the IP geolocation data through the simple REST API. All the responses are JSON encoded",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tools.keycdn.com/geo",
					"Category": "Geocoding"
				},
				{
					"API": "LocationIQ",
					"Description": "Provides forward/reverse geocoding and batch geocoding",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://locationiq.org/docs/",
					"Category": "Geocoding"
				},
				{
					"API": "Longdo Map",
					"Description": "Interactive map with detailed places and information portal in Thailand",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://map.longdo.com/docs/",
					"Category": "Geocoding"
				},
				{
					"API": "Mapbox",
					"Description": "Create/customize beautiful digital maps",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.mapbox.com/",
					"Category": "Geocoding"
				},
				{
					"API": "MapQuest",
					"Description": "To access tools and resources to map the world",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://developer.mapquest.com/",
					"Category": "Geocoding"
				},
				{
					"API": "Mexico",
					"Description": "Mexico RESTful zip codes API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/IcaliaLabs/sepomex",
					"Category": "Geocoding"
				},
				{
					"API": "Nominatim",
					"Description": "Provides worldwide forward / reverse geocoding",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://nominatim.org/release-docs/latest/api/Overview/",
					"Category": "Geocoding"
				},
				{
					"API": "One Map, Singapore",
					"Description": "Singapore Land Authority REST API services for Singapore addresses",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.onemap.gov.sg/docs/",
					"Category": "Geocoding"
				},
				{
					"API": "OnWater",
					"Description": "Determine if a lat/lon is on water or land",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://onwater.io/",
					"Category": "Geocoding"
				},
				{
					"API": "Open Topo Data",
					"Description": "Elevation and ocean depth for a latitude and longitude",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://www.opentopodata.org",
					"Category": "Geocoding"
				},
				{
					"API": "OpenCage",
					"Description": "Forward and reverse geocoding using open data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://opencagedata.com",
					"Category": "Geocoding"
				},
				{
					"API": "openrouteservice.org",
					"Description": "Directions, POIs, isochrones, geocoding (+reverse), elevation, and more",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://openrouteservice.org/",
					"Category": "Geocoding"
				},
				{
					"API": "OpenStreetMap",
					"Description": "Navigation, geolocation and geographical data",
					"Auth": "OAuth",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://wiki.openstreetmap.org/wiki/API",
					"Category": "Geocoding"
				},
				{
					"API": "Pinball Map",
					"Description": "A crowdsourced map of public pinball machines",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://pinballmap.com/api/v1/docs",
					"Category": "Geocoding"
				},
				{
					"API": "positionstack",
					"Description": "Forward & Reverse Batch Geocoding REST API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://positionstack.com/",
					"Category": "Geocoding"
				},
				{
					"API": "Postali",
					"Description": "Mexico Zip Codes API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://postali.app/api",
					"Category": "Geocoding"
				},
				{
					"API": "PostcodeData.nl",
					"Description": "Provide geolocation data based on postcode for Dutch addresses",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://api.postcodedata.nl/v1/postcode/?postcode=1211EP&streetnumber=60&ref=domeinnaam.nl&type=json",
					"Category": "Geocoding"
				},
				{
					"API": "Postcodes.io",
					"Description": "Postcode lookup & Geolocation for the UK",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://postcodes.io",
					"Category": "Geocoding"
				},
				{
					"API": "Queimadas INPE",
					"Description": "Access to heat focus data (probable wildfire)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://queimadas.dgi.inpe.br/queimadas/dados-abertos/",
					"Category": "Geocoding"
				},
				{
					"API": "REST Countries",
					"Description": "Get information about countries via a RESTful API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://restcountries.com",
					"Category": "Geocoding"
				},
				{
					"API": "RoadGoat Cities",
					"Description": "Cities content & photos API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://www.roadgoat.com/business/cities-api",
					"Category": "Geocoding"
				},
				{
					"API": "Rwanda Locations",
					"Description": "Rwanda Provences, Districts, Cities, Capital City, Sector, cells, villages and streets",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/victorkarangwa4/api/rwanda",
					"Category": "Geocoding"
				},
				{
					"API": "SLF",
					"Description": "German city, country, river, database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/slftool/slftool.github.io/blob/master/API.md",
					"Category": "Geocoding"
				},
				{
					"API": "SpotSense",
					"Description": "Add location based interactions to your mobile app",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://spotsense.io/",
					"Category": "Geocoding"
				},
				{
					"API": "Telize",
					"Description": "Telize offers location information from any IP address",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://rapidapi.com/fcambus/api/telize/",
					"Category": "Geocoding"
				},
				{
					"API": "TomTom",
					"Description": "Maps, Directions, Places and Traffic APIs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developer.tomtom.com/",
					"Category": "Geocoding"
				},
				{
					"API": "Uebermaps",
					"Description": "Discover and share maps with friends",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://uebermaps.com/api/v2",
					"Category": "Geocoding"
				},
				{
					"API": "US ZipCode",
					"Description": "Validate and append data for any US ZipCode",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.smarty.com/docs/cloud/us-zipcode-api",
					"Category": "Geocoding"
				},
				{
					"API": "Utah AGRC",
					"Description": "Utah Web API for geocoding Utah addresses",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.mapserv.utah.gov",
					"Category": "Geocoding"
				},
				{
					"API": "ViaCep",
					"Description": "Brazil RESTful zip codes API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://viacep.com.br",
					"Category": "Geocoding"
				},
				{
					"API": "What3Words",
					"Description": "Three words as rememberable and unique coordinates worldwide",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://what3words.com",
					"Category": "Geocoding"
				},
				{
					"API": "Yandex.Maps Geocoder",
					"Description": "Use geocoding to get an object's coordinates from its address",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://yandex.com/dev/maps/geocoder",
					"Category": "Geocoding"
				},
				{
					"API": "ZipCodeAPI",
					"Description": "US zip code distance, radius and location API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.zipcodeapi.com",
					"Category": "Geocoding"
				},
				{
					"API": "Zippopotam.us",
					"Description": "Get information about place such as country, city, state, etc",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.zippopotam.us",
					"Category": "Geocoding"
				},
				{
					"API": "Ziptastic",
					"Description": "Get the country, state, and city of any US zip-code",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ziptasticapi.com/",
					"Category": "Geocoding"
				},
				{
					"API": "Bank Negara Malaysia Open Data",
					"Description": "Malaysia Central Bank Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apikijangportal.bnm.gov.my/",
					"Category": "Government"
				},
				{
					"API": "BCLaws",
					"Description": "Access to the laws of British Columbia",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://www.bclaws.gov.bc.ca/civix/template/complete/api/index.html",
					"Category": "Government"
				},
				{
					"API": "Brazil",
					"Description": "Community driven API for Brazil Public Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://brasilapi.com.br/",
					"Category": "Government"
				},
				{
					"API": "Brazil Central Bank Open Data",
					"Description": "Brazil Central Bank Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dadosabertos.bcb.gov.br/",
					"Category": "Government"
				},
				{
					"API": "Brazil Receita WS",
					"Description": "Consult companies by CNPJ for Brazilian companies",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.receitaws.com.br/",
					"Category": "Government"
				},
				{
					"API": "Brazilian Chamber of Deputies Open Data",
					"Description": "Provides legislative information in Apis XML and JSON, as well as files in various formats",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://dadosabertos.camara.leg.br/swagger/api.html",
					"Category": "Government"
				},
				{
					"API": "Census.gov",
					"Description": "The US Census Bureau provides various APIs and data sets on demographics and businesses",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.census.gov/data/developers/data-sets.html",
					"Category": "Government"
				},
				{
					"API": "City, Berlin",
					"Description": "Berlin(DE) City Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://daten.berlin.de/",
					"Category": "Government"
				},
				{
					"API": "City, Gdańsk",
					"Description": "Gdańsk (PL) City Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ckan.multimediagdansk.pl/en",
					"Category": "Government"
				},
				{
					"API": "City, Gdynia",
					"Description": "Gdynia (PL) City Open Data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://otwartedane.gdynia.pl/en/api_doc.html",
					"Category": "Government"
				},
				{
					"API": "City, Helsinki",
					"Description": "Helsinki(FI) City Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://hri.fi/en_gb/",
					"Category": "Government"
				},
				{
					"API": "City, Lviv",
					"Description": "Lviv(UA) City Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opendata.city-adm.lviv.ua/",
					"Category": "Government"
				},
				{
					"API": "City, Nantes Open Data",
					"Description": "Nantes(FR) City Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.nantesmetropole.fr/pages/home/",
					"Category": "Government"
				},
				{
					"API": "City, New York Open Data",
					"Description": "New York (US) City Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opendata.cityofnewyork.us/",
					"Category": "Government"
				},
				{
					"API": "City, Prague Open Data",
					"Description": "Prague(CZ) City Open Data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://opendata.praha.eu/en",
					"Category": "Government"
				},
				{
					"API": "City, Toronto Open Data",
					"Description": "Toronto (CA) City Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://open.toronto.ca/",
					"Category": "Government"
				},
				{
					"API": "Code.gov",
					"Description": "The primary platform for Open Source and code sharing for the U.S. Federal Government",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://code.gov",
					"Category": "Government"
				},
				{
					"API": "Colorado Information Marketplace",
					"Description": "Colorado State Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.colorado.gov/",
					"Category": "Government"
				},
				{
					"API": "Data USA",
					"Description": "US Public Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://datausa.io/about/api/",
					"Category": "Government"
				},
				{
					"API": "Data.gov",
					"Description": "US Government Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.data.gov/",
					"Category": "Government"
				},
				{
					"API": "Data.parliament.uk",
					"Description": "Contains live datasets including information about petitions, bills, MP votes, attendance and more",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://explore.data.parliament.uk/?learnmore=Members",
					"Category": "Government"
				},
				{
					"API": "Deutscher Bundestag DIP",
					"Description": "This API provides read access to DIP entities (e.g. activities, persons, printed material)",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dip.bundestag.de/documents/informationsblatt_zur_dip_api_v01.pdf",
					"Category": "Government"
				},
				{
					"API": "District of Columbia Open Data",
					"Description": "Contains D.C. government public datasets, including crime, GIS, financial data, and so on",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://opendata.dc.gov/pages/using-apis",
					"Category": "Government"
				},
				{
					"API": "EPA",
					"Description": "Web services and data sets from the US Environmental Protection Agency",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.epa.gov/developers/data-data-products#apis",
					"Category": "Government"
				},
				{
					"API": "FBI Wanted",
					"Description": "Access information on the FBI Wanted program",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.fbi.gov/wanted/api",
					"Category": "Government"
				},
				{
					"API": "FEC",
					"Description": "Information on campaign donations in federal elections",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.open.fec.gov/developers/",
					"Category": "Government"
				},
				{
					"API": "Federal Register",
					"Description": "The Daily Journal of the United States Government",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.federalregister.gov/reader-aids/developer-resources/rest-api",
					"Category": "Government"
				},
				{
					"API": "Food Standards Agency",
					"Description": "UK food hygiene rating data API",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://ratings.food.gov.uk/open-data/en-GB",
					"Category": "Government"
				},
				{
					"API": "Gazette Data, UK",
					"Description": "UK official public record API",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.thegazette.co.uk/data",
					"Category": "Government"
				},
				{
					"API": "Gun Policy",
					"Description": "International firearm injury prevention and policy",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.gunpolicy.org/api",
					"Category": "Government"
				},
				{
					"API": "INEI",
					"Description": "Peruvian Statistical Government Open Data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://iinei.inei.gob.pe/microdatos/",
					"Category": "Government"
				},
				{
					"API": "Interpol Red Notices",
					"Description": "Access and search Interpol Red Notices",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://interpol.api.bund.dev/",
					"Category": "Government"
				},
				{
					"API": "Istanbul (İBB) Open Data",
					"Description": "Data sets from the İstanbul Metropolitan Municipality (İBB)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.ibb.gov.tr",
					"Category": "Government"
				},
				{
					"API": "National Park Service, US",
					"Description": "Data from the US National Park Service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.nps.gov/subjects/developer/",
					"Category": "Government"
				},
				{
					"API": "Open Government, ACT",
					"Description": "Australian Capital Territory Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.act.gov.au/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Argentina",
					"Description": "Argentina Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://datos.gob.ar/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Australia",
					"Description": "Australian Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.gov.au/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Austria",
					"Description": "Austria Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.gv.at/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Belgium",
					"Description": "Belgium Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.be/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Canada",
					"Description": "Canadian Government Open Data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://open.canada.ca/en",
					"Category": "Government"
				},
				{
					"API": "Open Government, Colombia",
					"Description": "Colombia Government Open Data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://www.dane.gov.co/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Cyprus",
					"Description": "Cyprus Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.cy/?language=en",
					"Category": "Government"
				},
				{
					"API": "Open Government, Czech Republic",
					"Description": "Czech Republic Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.cz/english/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Denmark",
					"Description": "Denmark Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.opendata.dk/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Estonia",
					"Description": "Estonia Government Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://avaandmed.eesti.ee/instructions/opendata-dataset-api",
					"Category": "Government"
				},
				{
					"API": "Open Government, Finland",
					"Description": "Finland Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.avoindata.fi/en",
					"Category": "Government"
				},
				{
					"API": "Open Government, France",
					"Description": "French Government Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.gouv.fr/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Germany",
					"Description": "Germany Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.govdata.de/daten/-/details/govdata-metadatenkatalog",
					"Category": "Government"
				},
				{
					"API": "Open Government, Greece",
					"Description": "Greece Government Open Data",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.gr/",
					"Category": "Government"
				},
				{
					"API": "Open Government, India",
					"Description": "Indian Government Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.in/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Ireland",
					"Description": "Ireland Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.ie/pages/developers",
					"Category": "Government"
				},
				{
					"API": "Open Government, Italy",
					"Description": "Italy Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.dati.gov.it/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Korea",
					"Description": "Korea Government Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.go.kr/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Lithuania",
					"Description": "Lithuania Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.lt/public/api/1",
					"Category": "Government"
				},
				{
					"API": "Open Government, Luxembourg",
					"Description": "Luxembourgish Government Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.public.lu",
					"Category": "Government"
				},
				{
					"API": "Open Government, Mexico",
					"Description": "Mexican Statistical Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.inegi.org.mx/datos/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Mexico",
					"Description": "Mexico Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://datos.gob.mx/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Netherlands",
					"Description": "Netherlands Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.overheid.nl/en/ondersteuning/data-publiceren/api",
					"Category": "Government"
				},
				{
					"API": "Open Government, New South Wales",
					"Description": "New South Wales Government Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.nsw.gov.au/",
					"Category": "Government"
				},
				{
					"API": "Open Government, New Zealand",
					"Description": "New Zealand Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.govt.nz/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Norway",
					"Description": "Norwegian Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://data.norge.no/dataservices",
					"Category": "Government"
				},
				{
					"API": "Open Government, Peru",
					"Description": "Peru Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.datosabiertos.gob.pe/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Poland",
					"Description": "Poland Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dane.gov.pl/en",
					"Category": "Government"
				},
				{
					"API": "Open Government, Portugal",
					"Description": "Portugal Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dados.gov.pt/en/docapi/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Queensland Government",
					"Description": "Queensland Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.qld.gov.au/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Romania",
					"Description": "Romania Government Open Data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://data.gov.ro/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Saudi Arabia",
					"Description": "Saudi Arabia Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.sa",
					"Category": "Government"
				},
				{
					"API": "Open Government, Singapore",
					"Description": "Singapore Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.sg/developer",
					"Category": "Government"
				},
				{
					"API": "Open Government, Slovakia",
					"Description": "Slovakia Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.sk/en/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Slovenia",
					"Description": "Slovenia Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://podatki.gov.si/",
					"Category": "Government"
				},
				{
					"API": "Open Government, South Australian Government",
					"Description": "South Australian Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.sa.gov.au/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Spain",
					"Description": "Spain Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://datos.gob.es/en",
					"Category": "Government"
				},
				{
					"API": "Open Government, Sweden",
					"Description": "Sweden Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.dataportal.se/en/dataservice/91_29789/api-for-the-statistical-database",
					"Category": "Government"
				},
				{
					"API": "Open Government, Switzerland",
					"Description": "Switzerland Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://handbook.opendata.swiss/de/content/nutzen/api-nutzen.html",
					"Category": "Government"
				},
				{
					"API": "Open Government, Taiwan",
					"Description": "Taiwan Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.tw/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Thailand",
					"Description": "Thailand Government Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.go.th/",
					"Category": "Government"
				},
				{
					"API": "Open Government, UK",
					"Description": "UK Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.gov.uk/",
					"Category": "Government"
				},
				{
					"API": "Open Government, USA",
					"Description": "United States Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.gov/",
					"Category": "Government"
				},
				{
					"API": "Open Government, Victoria State Government",
					"Description": "Victoria State Government Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.data.vic.gov.au/",
					"Category": "Government"
				},
				{
					"API": "Open Government, West Australia",
					"Description": "West Australia Open Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.wa.gov.au/",
					"Category": "Government"
				},
				{
					"API": "PRC Exam Schedule",
					"Description": "Unofficial Philippine Professional Regulation Commission's examination schedule",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.whenisthenextboardexam.com/docs/",
					"Category": "Government"
				},
				{
					"API": "Represent by Open North",
					"Description": "Find Canadian Government Representatives",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://represent.opennorth.ca/",
					"Category": "Government"
				},
				{
					"API": "UK Companies House",
					"Description": "UK Companies House Data from the UK government",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.company-information.service.gov.uk/",
					"Category": "Government"
				},
				{
					"API": "US Presidential Election Data by TogaTech",
					"Description": "Basic candidate data and live electoral vote counts for top two parties in US presidential election",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://uselection.togatech.org/api/",
					"Category": "Government"
				},
				{
					"API": "USA.gov",
					"Description": "Authoritative information on U.S. programs, events, services and more",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.usa.gov/developer",
					"Category": "Government"
				},
				{
					"API": "USAspending.gov",
					"Description": "US federal spending data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.usaspending.gov/",
					"Category": "Government"
				},
				{
					"API": "CMS.gov",
					"Description": "Access to the data from the CMS - medicare.gov",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.cms.gov/provider-data/",
					"Category": "Health"
				},
				{
					"API": "Coronavirus",
					"Description": "HTTP API for Latest Covid-19 Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pipedream.com/@pravin/http-api-for-latest-wuhan-coronavirus-data-2019-ncov-p_G6CLVM/readme",
					"Category": "Health"
				},
				{
					"API": "Coronavirus in the UK",
					"Description": "UK Government coronavirus data, including deaths and cases by region",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://coronavirus.data.gov.uk/details/developers-guide",
					"Category": "Health"
				},
				{
					"API": "Covid Tracking Project",
					"Description": "Covid-19  data for the US",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://covidtracking.com/data/api/version-2",
					"Category": "Health"
				},
				{
					"API": "Covid-19",
					"Description": "Covid 19 spread, infection and recovery",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://covid19api.com/",
					"Category": "Health"
				},
				{
					"API": "Covid-19",
					"Description": "Covid 19 cases, deaths and recovery per country",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/M-Media-Group/Covid-19-API",
					"Category": "Health"
				},
				{
					"API": "Covid-19 Datenhub",
					"Description": "Maps, datasets, applications and more in the context of COVID-19",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://npgeo-corona-npgeo-de.hub.arcgis.com",
					"Category": "Health"
				},
				{
					"API": "Covid-19 Government Response",
					"Description": "Government measures tracker to fight against the Covid-19 pandemic",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://covidtracker.bsg.ox.ac.uk",
					"Category": "Health"
				},
				{
					"API": "Covid-19 India",
					"Description": "Covid 19 statistics state and district wise about cases, vaccinations, recovery within India",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.covid19india.org/",
					"Category": "Health"
				},
				{
					"API": "Covid-19 JHU CSSE",
					"Description": "Open-source API for exploring Covid19 cases based on JHU CSSE",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://nuttaphat.com/covid19-api/",
					"Category": "Health"
				},
				{
					"API": "Covid-19 Live Data",
					"Description": "Global and countrywise data of Covid 19 daily Summary, confirmed cases, recovered and deaths",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/mathdroid/covid-19-api",
					"Category": "Health"
				},
				{
					"API": "Covid-19 Philippines",
					"Description": "Unofficial Covid-19 Web API for Philippines from data collected by DOH",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/Simperfy/Covid-19-API-Philippines-DOH",
					"Category": "Health"
				},
				{
					"API": "COVID-19 Tracker Canada",
					"Description": "Details on Covid-19 cases across Canada",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.covid19tracker.ca/docs/1.0/overview",
					"Category": "Health"
				},
				{
					"API": "COVID-19 Tracker Sri Lanka",
					"Description": "Provides situation of the COVID-19 patients reported in Sri Lanka",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.hpb.health.gov.lk/en/api-documentation",
					"Category": "Health"
				},
				{
					"API": "COVID-ID",
					"Description": "Indonesian government Covid data per province",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://data.covid19.go.id/public/api/prov.json",
					"Category": "Health"
				},
				{
					"API": "Dataflow Kit COVID-19",
					"Description": "COVID-19 live statistics into sites per hour",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://covid-19.dataflowkit.com",
					"Category": "Health"
				},
				{
					"API": "FoodData Central",
					"Description": "National Nutrient Database for Standard Reference",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://fdc.nal.usda.gov/",
					"Category": "Health"
				},
				{
					"API": "Healthcare.gov",
					"Description": "Educational content about the US Health Insurance Marketplace",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.healthcare.gov/developers/",
					"Category": "Health"
				},
				{
					"API": "Humanitarian Data Exchange",
					"Description": "Humanitarian Data Exchange (HDX) is open platform for sharing data across crises and organisations",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.humdata.org/",
					"Category": "Health"
				},
				{
					"API": "Infermedica",
					"Description": "NLP based symptom checker and patient triage API for health diagnosis from text",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developer.infermedica.com/docs/",
					"Category": "Health"
				},
				{
					"API": "LAPIS",
					"Description": "SARS-CoV-2 genomic sequences from public sources",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://cov-spectrum.ethz.ch/public",
					"Category": "Health"
				},
				{
					"API": "Lexigram",
					"Description": "NLP that extracts mentions of clinical concepts from text, gives access to clinical ontology",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.lexigram.io/",
					"Category": "Health"
				},
				{
					"API": "Makeup",
					"Description": "Makeup Information",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://makeup-api.herokuapp.com/",
					"Category": "Health"
				},
				{
					"API": "MyVaccination",
					"Description": "Vaccination data for Malaysia",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://documenter.getpostman.com/view/16605343/Tzm8GG7u",
					"Category": "Health"
				},
				{
					"API": "NPPES",
					"Description": "National Plan & Provider Enumeration System, info on healthcare providers registered in US",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://npiregistry.cms.hhs.gov/registry/help-api",
					"Category": "Health"
				},
				{
					"API": "Nutritionix",
					"Description": "Worlds largest verified nutrition database",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.nutritionix.com/",
					"Category": "Health"
				},
				{
					"API": "Open Data NHS Scotland",
					"Description": "Medical reference data and statistics by Public Health Scotland",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.opendata.nhs.scot",
					"Category": "Health"
				},
				{
					"API": "Open Disease",
					"Description": "API for Current cases and more stuff about COVID-19 and Influenza",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://disease.sh/",
					"Category": "Health"
				},
				{
					"API": "openFDA",
					"Description": "Public FDA data about drugs, devices and foods",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://open.fda.gov",
					"Category": "Health"
				},
				{
					"API": "Orion Health",
					"Description": "Medical platform which allows the development of applications for different healthcare scenarios",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.orionhealth.io/",
					"Category": "Health"
				},
				{
					"API": "Quarantine",
					"Description": "Coronavirus API with free COVID-19 live updates",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://quarantine.country/coronavirus/api/",
					"Category": "Health"
				},
				{
					"API": "Adzuna",
					"Description": "Job board aggregator",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.adzuna.com/overview",
					"Category": "Jobs"
				},
				{
					"API": "Arbeitnow",
					"Description": "API for Job board aggregator in Europe / Remote",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://documenter.getpostman.com/view/18545278/UVJbJdKh",
					"Category": "Jobs"
				},
				{
					"API": "Arbeitsamt",
					"Description": "API for the \"Arbeitsamt\", which is a german Job board aggregator",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://jobsuche.api.bund.dev/",
					"Category": "Jobs"
				},
				{
					"API": "Careerjet",
					"Description": "Job search engine",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://www.careerjet.com/partners/api/",
					"Category": "Jobs"
				},
				{
					"API": "DevITjobs UK",
					"Description": "Jobs with GraphQL",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://devitjobs.uk/job_feed.xml",
					"Category": "Jobs"
				},
				{
					"API": "Findwork",
					"Description": "Job board",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://findwork.dev/developers/",
					"Category": "Jobs"
				},
				{
					"API": "GraphQL Jobs",
					"Description": "Jobs with GraphQL",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://graphql.jobs/docs/api/",
					"Category": "Jobs"
				},
				{
					"API": "Jobs2Careers",
					"Description": "Job aggregator",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://api.jobs2careers.com/api/spec.pdf",
					"Category": "Jobs"
				},
				{
					"API": "Jooble",
					"Description": "Job search engine",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://jooble.org/api/about",
					"Category": "Jobs"
				},
				{
					"API": "Juju",
					"Description": "Job search engine",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.juju.com/publisher/spec/",
					"Category": "Jobs"
				},
				{
					"API": "Open Skills",
					"Description": "Job titles, skills and related jobs data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview",
					"Category": "Jobs"
				},
				{
					"API": "Reed",
					"Description": "Job board aggregator",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.reed.co.uk/developers",
					"Category": "Jobs"
				},
				{
					"API": "The Muse",
					"Description": "Job board and company profiles",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.themuse.com/developers/api/v2",
					"Category": "Jobs"
				},
				{
					"API": "Upwork",
					"Description": "Freelance job board and management system",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.upwork.com/",
					"Category": "Jobs"
				},
				{
					"API": "USAJOBS",
					"Description": "US government job board",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.usajobs.gov/",
					"Category": "Jobs"
				},
				{
					"API": "WhatJobs",
					"Description": "Job search engine",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.whatjobs.com/affiliates",
					"Category": "Jobs"
				},
				{
					"API": "ZipRecruiter",
					"Description": "Job search app and website",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.ziprecruiter.com/publishers",
					"Category": "Jobs"
				},
				{
					"API": "AI For Thai",
					"Description": "Free Various Thai AI API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://aiforthai.in.th/index.php",
					"Category": "Machine Learning"
				},
				{
					"API": "Clarifai",
					"Description": "Computer Vision",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.clarifai.com/api-guide/api-overview",
					"Category": "Machine Learning"
				},
				{
					"API": "Cloudmersive",
					"Description": "Image captioning, face recognition, NSFW classification",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.cloudmersive.com/image-recognition-and-processing-api",
					"Category": "Machine Learning"
				},
				{
					"API": "Deepcode",
					"Description": "AI for code review",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.deepcode.ai",
					"Category": "Machine Learning"
				},
				{
					"API": "Dialogflow",
					"Description": "Natural Language Processing",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://cloud.google.com/dialogflow/docs/",
					"Category": "Machine Learning"
				},
				{
					"API": "EXUDE-API",
					"Description": "Used for the primary ways for filtering the stopping, stemming words from the text data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "http://uttesh.com/exude-api/",
					"Category": "Machine Learning"
				},
				{
					"API": "Hirak FaceAPI",
					"Description": "Face detection, face recognition with age estimation/gender estimation, accurate, no quota limits",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://faceapi.hirak.site/",
					"Category": "Machine Learning"
				},
				{
					"API": "Imagga",
					"Description": "Image Recognition Solutions like Tagging, Visual Search, NSFW moderation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://imagga.com/",
					"Category": "Machine Learning"
				},
				{
					"API": "Inferdo",
					"Description": "Computer Vision services like Facial detection, Image labeling, NSFW classification",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/user/inferdo",
					"Category": "Machine Learning"
				},
				{
					"API": "IPS Online",
					"Description": "Face and License Plate Anonymization",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.identity.ps/docs",
					"Category": "Machine Learning"
				},
				{
					"API": "Irisnet",
					"Description": "Realtime content moderation API that blocks or blurs unwanted images in real-time",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://irisnet.de/api/",
					"Category": "Machine Learning"
				},
				{
					"API": "Keen IO",
					"Description": "Data Analytics",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://keen.io/",
					"Category": "Machine Learning"
				},
				{
					"API": "Machinetutors",
					"Description": "AI Solutions: Video/Image Classification & Tagging, NSFW, Icon/Image/Audio Search, NLP",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.machinetutors.com/portfolio/MT_api.html",
					"Category": "Machine Learning"
				},
				{
					"API": "MessengerX.io",
					"Description": "A FREE API for developers to build and monetize personalized ML based chat apps",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://messengerx.rtfd.io",
					"Category": "Machine Learning"
				},
				{
					"API": "NLP Cloud",
					"Description": "NLP API using spaCy and transformers for NER, sentiments, classification, summarization, and more",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://nlpcloud.io",
					"Category": "Machine Learning"
				},
				{
					"API": "OpenVisionAPI",
					"Description": "Open source computer vision API based on open source models",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://openvisionapi.com",
					"Category": "Machine Learning"
				},
				{
					"API": "Perspective",
					"Description": "NLP API to return probability that if text is toxic, obscene, insulting or threatening",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://perspectiveapi.com",
					"Category": "Machine Learning"
				},
				{
					"API": "Roboflow Universe",
					"Description": "Pre-trained computer vision models",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://universe.roboflow.com",
					"Category": "Machine Learning"
				},
				{
					"API": "SkyBiometry",
					"Description": "Face Detection, Face Recognition and Face Grouping",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://skybiometry.com/documentation/",
					"Category": "Machine Learning"
				},
				{
					"API": "Time Door",
					"Description": "A time series analysis API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://timedoor.io",
					"Category": "Machine Learning"
				},
				{
					"API": "Unplugg",
					"Description": "Forecasting API for timeseries data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://unplu.gg/test_api.html",
					"Category": "Machine Learning"
				},
				{
					"API": "WolframAlpha",
					"Description": "Provides specific answers to questions using data and algorithms",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://products.wolframalpha.com/api/",
					"Category": "Machine Learning"
				},
				{
					"API": "7digital",
					"Description": "Api of Music store 7digital",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.7digital.com/reference",
					"Category": "Music"
				},
				{
					"API": "AI Mastering",
					"Description": "Automated Music Mastering",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://aimastering.com/api_docs/",
					"Category": "Music"
				},
				{
					"API": "Audiomack",
					"Description": "Api of the streaming music hub Audiomack",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.audiomack.com/data-api/docs",
					"Category": "Music"
				},
				{
					"API": "Bandcamp",
					"Description": "API of Music store Bandcamp",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bandcamp.com/developer",
					"Category": "Music"
				},
				{
					"API": "Bandsintown",
					"Description": "Music Events",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0",
					"Category": "Music"
				},
				{
					"API": "Deezer",
					"Description": "Music",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.deezer.com/api",
					"Category": "Music"
				},
				{
					"API": "Discogs",
					"Description": "Music",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.discogs.com/developers/",
					"Category": "Music"
				},
				{
					"API": "Freesound",
					"Description": "Music Samples",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://freesound.org/docs/api/",
					"Category": "Music"
				},
				{
					"API": "Gaana",
					"Description": "API to retrieve song information from Gaana",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/cyberboysumanjay/GaanaAPI",
					"Category": "Music"
				},
				{
					"API": "Genius",
					"Description": "Crowdsourced lyrics and music knowledge",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.genius.com/",
					"Category": "Music"
				},
				{
					"API": "Genrenator",
					"Description": "Music genre generator",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://binaryjazz.us/genrenator-api/",
					"Category": "Music"
				},
				{
					"API": "iTunes Search",
					"Description": "Software products",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/",
					"Category": "Music"
				},
				{
					"API": "Jamendo",
					"Description": "Music",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.jamendo.com/v3.0/docs",
					"Category": "Music"
				},
				{
					"API": "JioSaavn",
					"Description": "API to retrieve song information, album meta data and many more from JioSaavn",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/cyberboysumanjay/JioSaavnAPI",
					"Category": "Music"
				},
				{
					"API": "KKBOX",
					"Description": "Get music libraries, playlists, charts, and perform out of KKBOX's platform",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.kkbox.com",
					"Category": "Music"
				},
				{
					"API": "KSoft.Si Lyrics",
					"Description": "API to get lyrics for songs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.ksoft.si/api/lyrics-api",
					"Category": "Music"
				},
				{
					"API": "LastFm",
					"Description": "Music",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.last.fm/api",
					"Category": "Music"
				},
				{
					"API": "Lyrics.ovh",
					"Description": "Simple API to retrieve the lyrics of a song",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://lyricsovh.docs.apiary.io",
					"Category": "Music"
				},
				{
					"API": "Mixcloud",
					"Description": "Music",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.mixcloud.com/developers/",
					"Category": "Music"
				},
				{
					"API": "MusicBrainz",
					"Description": "Music",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2",
					"Category": "Music"
				},
				{
					"API": "Musixmatch",
					"Description": "Music",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.musixmatch.com/",
					"Category": "Music"
				},
				{
					"API": "Napster",
					"Description": "Music",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developer.napster.com/api/v2.2",
					"Category": "Music"
				},
				{
					"API": "Openwhyd",
					"Description": "Download curated playlists of streaming tracks (YouTube, SoundCloud, etc...)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://openwhyd.github.io/openwhyd/API",
					"Category": "Music"
				},
				{
					"API": "Phishin",
					"Description": "A web-based archive of legal live audio recordings of the improvisational rock band Phish",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://phish.in/api-docs",
					"Category": "Music"
				},
				{
					"API": "Radio Browser",
					"Description": "List of internet radio stations",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.radio-browser.info/",
					"Category": "Music"
				},
				{
					"API": "Songkick",
					"Description": "Music Events",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.songkick.com/developer/",
					"Category": "Music"
				},
				{
					"API": "Songlink / Odesli",
					"Description": "Get all the services on which a song is available",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.notion.so/API-d0ebe08a5e304a55928405eb682f6741",
					"Category": "Music"
				},
				{
					"API": "Songsterr",
					"Description": "Provides guitar, bass and drums tabs and chords",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.songsterr.com/a/wa/api/",
					"Category": "Music"
				},
				{
					"API": "SoundCloud",
					"Description": "With SoundCloud API you can build applications that will give more power to control your content",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.soundcloud.com/docs/api/guide",
					"Category": "Music"
				},
				{
					"API": "Spotify",
					"Description": "View Spotify music catalog, manage users' libraries, get recommendations and more",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://beta.developer.spotify.com/documentation/web-api/",
					"Category": "Music"
				},
				{
					"API": "TasteDive",
					"Description": "Similar artist API (also works for movies and TV shows)",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tastedive.com/read/api",
					"Category": "Music"
				},
				{
					"API": "TheAudioDB",
					"Description": "Music",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.theaudiodb.com/api_guide.php",
					"Category": "Music"
				},
				{
					"API": "Vagalume",
					"Description": "Crowdsourced lyrics and music knowledge",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.vagalume.com.br/docs/",
					"Category": "Music"
				},
				{
					"API": "apilayer mediastack",
					"Description": "Free, Simple REST API for Live News & Blog Articles",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mediastack.com/",
					"Category": "News"
				},
				{
					"API": "Associated Press",
					"Description": "Search for news and metadata from Associated Press",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.ap.org/",
					"Category": "News"
				},
				{
					"API": "Chronicling America",
					"Description": "Provides access to millions of pages of historic US newspapers from the Library of Congress",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://chroniclingamerica.loc.gov/about/api/",
					"Category": "News"
				},
				{
					"API": "Currents",
					"Description": "Latest news published in various news sources, blogs and forums",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://currentsapi.services/",
					"Category": "News"
				},
				{
					"API": "Feedbin",
					"Description": "RSS reader",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/feedbin/feedbin-api",
					"Category": "News"
				},
				{
					"API": "GNews",
					"Description": "Search for news from various sources",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://gnews.io/",
					"Category": "News"
				},
				{
					"API": "Graphs for Coronavirus",
					"Description": "Each Country separately and Worldwide Graphs for Coronavirus. Daily updates",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://corona.dnsforfamily.com/api.txt",
					"Category": "News"
				},
				{
					"API": "Inshorts News",
					"Description": "Provides news from inshorts",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/cyberboysumanjay/Inshorts-News-API",
					"Category": "News"
				},
				{
					"API": "MarketAux",
					"Description": "Live stock market news with tagged tickers + sentiment and stats JSON API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.marketaux.com/",
					"Category": "News"
				},
				{
					"API": "New York Times",
					"Description": "The New York Times Developer Network",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.nytimes.com/",
					"Category": "News"
				},
				{
					"API": "News",
					"Description": "Headlines currently published on a range of news sources and blogs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://newsapi.org/",
					"Category": "News"
				},
				{
					"API": "NewsData",
					"Description": "News data API for live-breaking news and headlines from reputed  news sources",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://newsdata.io/docs",
					"Category": "News"
				},
				{
					"API": "NewsX",
					"Description": "Get or Search Latest Breaking News with ML Powered Summaries 🤖",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/machaao-inc-machaao-inc-default/api/newsx/",
					"Category": "News"
				},
				{
					"API": "NPR One",
					"Description": "Personalized news listening experience from NPR",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://dev.npr.org/api/",
					"Category": "News"
				},
				{
					"API": "Spaceflight News",
					"Description": "Spaceflight related news 🚀",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://spaceflightnewsapi.net",
					"Category": "News"
				},
				{
					"API": "The Guardian",
					"Description": "Access all the content the Guardian creates, categorised by tags and section",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://open-platform.theguardian.com/",
					"Category": "News"
				},
				{
					"API": "The Old Reader",
					"Description": "RSS reader",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/theoldreader/api",
					"Category": "News"
				},
				{
					"API": "TheNews",
					"Description": "Aggregated headlines, top story and live news JSON API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.thenewsapi.com/",
					"Category": "News"
				},
				{
					"API": "Trove",
					"Description": "Search through the National Library of Australia collection of 1000s of digitised newspapers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://trove.nla.gov.au/about/create-something/using-api",
					"Category": "News"
				},
				{
					"API": "18F",
					"Description": "Unofficial US Federal Government API Development",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://18f.github.io/API-All-the-X/",
					"Category": "Open Data"
				},
				{
					"API": "API Setu",
					"Description": "An Indian Government platform that provides a lot of APIS for KYC, business, education & employment",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.apisetu.gov.in/",
					"Category": "Open Data"
				},
				{
					"API": "Archive.org",
					"Description": "The Internet Archive",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://archive.readme.io/docs",
					"Category": "Open Data"
				},
				{
					"API": "Black History Facts",
					"Description": "Contribute or search one of the largest black history fact databases on the web",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.blackhistoryapi.io/docs",
					"Category": "Open Data"
				},
				{
					"API": "BotsArchive",
					"Description": "JSON formatted details about Telegram Bots available in database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://botsarchive.com/docs.html",
					"Category": "Open Data"
				},
				{
					"API": "Callook.info",
					"Description": "United States ham radio callsigns",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://callook.info",
					"Category": "Open Data"
				},
				{
					"API": "CARTO",
					"Description": "Location Information Prediction",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://carto.com/",
					"Category": "Open Data"
				},
				{
					"API": "CollegeScoreCard.ed.gov",
					"Description": "Data on higher education institutions in the United States",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://collegescorecard.ed.gov/data/",
					"Category": "Open Data"
				},
				{
					"API": "Enigma Public",
					"Description": "Broadest collection of public data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developers.enigma.com/docs",
					"Category": "Open Data"
				},
				{
					"API": "French Address Search",
					"Description": "Address search via the French Government",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://geo.api.gouv.fr/adresse",
					"Category": "Open Data"
				},
				{
					"API": "GENESIS",
					"Description": "Federal Statistical Office Germany",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.destatis.de/EN/Service/OpenData/api-webservice.html",
					"Category": "Open Data"
				},
				{
					"API": "Joshua Project",
					"Description": "People groups of the world with the fewest followers of Christ",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.joshuaproject.net/",
					"Category": "Open Data"
				},
				{
					"API": "Kaggle",
					"Description": "Create and interact with Datasets, Notebooks, and connect with Kaggle",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.kaggle.com/docs/api",
					"Category": "Open Data"
				},
				{
					"API": "LinkPreview",
					"Description": "Get JSON formatted summary with title, description and preview image for any requested URL",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.linkpreview.net",
					"Category": "Open Data"
				},
				{
					"API": "Lowy Asia Power Index",
					"Description": "Get measure resources and influence to rank the relative power of states in Asia",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/0x0is1/lowy-index-api-docs",
					"Category": "Open Data"
				},
				{
					"API": "Microlink.io",
					"Description": "Extract structured data from any website",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://microlink.io",
					"Category": "Open Data"
				},
				{
					"API": "Nasdaq Data Link",
					"Description": "Stock market data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.data.nasdaq.com/",
					"Category": "Open Data"
				},
				{
					"API": "Nobel Prize",
					"Description": "Open data about nobel prizes and events",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.nobelprize.org/about/developer-zone-2/",
					"Category": "Open Data"
				},
				{
					"API": "Open Data Minneapolis",
					"Description": "Spatial (GIS) and non-spatial city data for Minneapolis",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://opendata.minneapolismn.gov/",
					"Category": "Open Data"
				},
				{
					"API": "openAFRICA",
					"Description": "Large datasets repository of African open data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://africaopendata.org/",
					"Category": "Open Data"
				},
				{
					"API": "OpenCorporates",
					"Description": "Data on corporate entities and directors in many countries",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://api.opencorporates.com/documentation/API-Reference",
					"Category": "Open Data"
				},
				{
					"API": "OpenSanctions",
					"Description": "Data on international sanctions, crime and politically exposed persons",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.opensanctions.org/docs/api/",
					"Category": "Open Data"
				},
				{
					"API": "PeakMetrics",
					"Description": "News articles and public datasets",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/peakmetrics-peakmetrics-default/api/peakmetrics-news",
					"Category": "Open Data"
				},
				{
					"API": "Recreation Information Database",
					"Description": "Recreational areas, federal lands, historic sites, museums, and other attractions/resources(US)",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ridb.recreation.gov/",
					"Category": "Open Data"
				},
				{
					"API": "Scoop.it",
					"Description": "Content Curation Service",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.scoop.it/dev",
					"Category": "Open Data"
				},
				{
					"API": "Socrata",
					"Description": "Access to Open Data from Governments, Non-profits and NGOs around the world",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dev.socrata.com/",
					"Category": "Open Data"
				},
				{
					"API": "Teleport",
					"Description": "Quality of Life Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.teleport.org/",
					"Category": "Open Data"
				},
				{
					"API": "Umeå Open Data",
					"Description": "Open data of the city Umeå in northen Sweden",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://opendata.umea.se/api/",
					"Category": "Open Data"
				},
				{
					"API": "Universities List",
					"Description": "University names, countries and domains",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/Hipo/university-domains-list",
					"Category": "Open Data"
				},
				{
					"API": "University of Oslo",
					"Description": "Courses, lecture videos, detailed information for courses etc. for the University of Oslo (Norway)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.uio.no/",
					"Category": "Open Data"
				},
				{
					"API": "UPC database",
					"Description": "More than 1.5 million barcode numbers from all around the world",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://upcdatabase.org/api",
					"Category": "Open Data"
				},
				{
					"API": "Urban Observatory",
					"Description": "The largest set of publicly available real time urban data in the UK",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "https://urbanobservatory.ac.uk",
					"Category": "Open Data"
				},
				{
					"API": "Wikidata",
					"Description": "Collaboratively edited knowledge base operated by the Wikimedia Foundation",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.wikidata.org/w/api.php?action=help",
					"Category": "Open Data"
				},
				{
					"API": "Wikipedia",
					"Description": "Mediawiki Encyclopedia",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mediawiki.org/wiki/API:Main_page",
					"Category": "Open Data"
				},
				{
					"API": "Yelp",
					"Description": "Find Local Business",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.yelp.com/developers/documentation/v3",
					"Category": "Open Data"
				},
				{
					"API": "Countly",
					"Description": "Countly web analytics",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://api.count.ly/reference",
					"Category": "Open Source Projects"
				},
				{
					"API": "Creative Commons Catalog",
					"Description": "Search among openly licensed and public domain works",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.creativecommons.engineering/",
					"Category": "Open Source Projects"
				},
				{
					"API": "Datamuse",
					"Description": "Word-finding query engine",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.datamuse.com/api/",
					"Category": "Open Source Projects"
				},
				{
					"API": "Drupal.org",
					"Description": "Drupal.org",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.drupal.org/drupalorg/docs/api",
					"Category": "Open Source Projects"
				},
				{
					"API": "Evil Insult Generator",
					"Description": "Evil Insults",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://evilinsult.com/api",
					"Category": "Open Source Projects"
				},
				{
					"API": "GitHub Contribution Chart Generator",
					"Description": "Create an image of your GitHub contributions",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github-contributions.vercel.app",
					"Category": "Open Source Projects"
				},
				{
					"API": "GitHub ReadMe Stats",
					"Description": "Add dynamically generated statistics to your GitHub profile ReadMe",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/anuraghazra/github-readme-stats",
					"Category": "Open Source Projects"
				},
				{
					"API": "Metabase",
					"Description": "An open source Business Intelligence server to share data and analytics inside your company",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.metabase.com/",
					"Category": "Open Source Projects"
				},
				{
					"API": "Shields",
					"Description": "Concise, consistent, and legible badges in SVG and raster format",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://shields.io/",
					"Category": "Open Source Projects"
				},
				{
					"API": "EPO",
					"Description": "European patent search system api",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.epo.org/",
					"Category": "Patent"
				},
				{
					"API": "PatentsView ",
					"Description": "API is intended to explore and visualize trends/patterns across the US innovation landscape",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://patentsview.org/apis/purpose",
					"Category": "Patent"
				},
				{
					"API": "TIPO",
					"Description": "Taiwan patent search system api",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://tiponet.tipo.gov.tw/Gazette/OpenData/OD/OD05.aspx?QryDS=API00",
					"Category": "Patent"
				},
				{
					"API": "USPTO",
					"Description": "USA patent api services",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.uspto.gov/learning-and-resources/open-data-and-mobility",
					"Category": "Patent"
				},
				{
					"API": "Advice Slip",
					"Description": "Generate random advice slips",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://api.adviceslip.com/",
					"Category": "Personality"
				},
				{
					"API": "Biriyani As A Service",
					"Description": "Biriyani images placeholder",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://biriyani.anoram.com/",
					"Category": "Personality"
				},
				{
					"API": "Dev.to",
					"Description": "Access Forem articles, users and other resources via API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.forem.com/api",
					"Category": "Personality"
				},
				{
					"API": "Dictum",
					"Description": "API to get access to the collection of the most inspiring expressions of mankind",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/fisenkodv/dictum",
					"Category": "Personality"
				},
				{
					"API": "FavQs.com",
					"Description": "FavQs allows you to collect, discover and share your favorite quotes",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://favqs.com/api",
					"Category": "Personality"
				},
				{
					"API": "FOAAS",
					"Description": "Fuck Off As A Service",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.foaas.com/",
					"Category": "Personality"
				},
				{
					"API": "Forismatic",
					"Description": "Inspirational Quotes",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://forismatic.com/en/api/",
					"Category": "Personality"
				},
				{
					"API": "icanhazdadjoke",
					"Description": "The largest selection of dad jokes on the internet",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://icanhazdadjoke.com/api",
					"Category": "Personality"
				},
				{
					"API": "Inspiration",
					"Description": "Motivational and Inspirational quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://inspiration.goprogram.ai/docs/",
					"Category": "Personality"
				},
				{
					"API": "kanye.rest",
					"Description": "REST API for random Kanye West quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://kanye.rest",
					"Category": "Personality"
				},
				{
					"API": "kimiquotes",
					"Description": "Team radio and interview quotes by Finnish F1 legend Kimi Räikkönen",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://kimiquotes.herokuapp.com/doc",
					"Category": "Personality"
				},
				{
					"API": "Medium",
					"Description": "Community of readers and writers offering unique perspectives on ideas",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/Medium/medium-api-docs",
					"Category": "Personality"
				},
				{
					"API": "Programming Quotes",
					"Description": "Programming Quotes API for open source projects",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/skolakoda/programming-quotes-api",
					"Category": "Personality"
				},
				{
					"API": "Quotable Quotes",
					"Description": "Quotable is a free, open source quotations API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/lukePeavey/quotable",
					"Category": "Personality"
				},
				{
					"API": "Quote Garden",
					"Description": "REST API for more than 5000 famous quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pprathameshmore.github.io/QuoteGarden/",
					"Category": "Personality"
				},
				{
					"API": "quoteclear",
					"Description": "Ever-growing list of James Clear quotes from the 3-2-1 Newsletter",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://quoteclear.web.app/",
					"Category": "Personality"
				},
				{
					"API": "Quotes on Design",
					"Description": "Inspirational Quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://quotesondesign.com/api/",
					"Category": "Personality"
				},
				{
					"API": "Stoicism Quote",
					"Description": "Quotes about Stoicism",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/tlcheah2/stoic-quote-lambda-public-api",
					"Category": "Personality"
				},
				{
					"API": "They Said So Quotes",
					"Description": "Quotes Trusted by many fortune brands around the world",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://theysaidso.com/api/",
					"Category": "Personality"
				},
				{
					"API": "Traitify",
					"Description": "Assess, collect and analyze Personality",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://app.traitify.com/developer",
					"Category": "Personality"
				},
				{
					"API": "Udemy(instructor)",
					"Description": "API for instructors on Udemy",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.udemy.com/developers/instructor/",
					"Category": "Personality"
				},
				{
					"API": "Vadivelu HTTP Codes",
					"Description": "On demand HTTP Codes with images",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://vadivelu.anoram.com/",
					"Category": "Personality"
				},
				{
					"API": "Zen Quotes",
					"Description": "Large collection of Zen quotes for inspiration",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://zenquotes.io/",
					"Category": "Personality"
				},
				{
					"API": "Abstract Phone Validation",
					"Description": "Validate phone numbers globally",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.abstractapi.com/phone-validation-api",
					"Category": "Phone"
				},
				{
					"API": "apilayer numverify",
					"Description": "Phone number validation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://numverify.com",
					"Category": "Phone"
				},
				{
					"API": "Cloudmersive Validate",
					"Description": "Validate international phone numbers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://cloudmersive.com/phone-number-validation-API",
					"Category": "Phone"
				},
				{
					"API": "Phone Specification",
					"Description": "Rest Api for Phone specifications",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/azharimm/phone-specs-api",
					"Category": "Phone"
				},
				{
					"API": "Veriphone",
					"Description": "Phone number validation & carrier lookup",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://veriphone.io",
					"Category": "Phone"
				},
				{
					"API": "apilayer screenshotlayer",
					"Description": "URL 2 Image",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://screenshotlayer.com",
					"Category": "Photography"
				},
				{
					"API": "APITemplate.io",
					"Description": "Dynamically generate images and PDFs from templates with a simple API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://apitemplate.io",
					"Category": "Photography"
				},
				{
					"API": "Bruzu",
					"Description": "Image generation with query string",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.bruzu.com",
					"Category": "Photography"
				},
				{
					"API": "CheetahO",
					"Description": "Photo optimization and resize",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://cheetaho.com/docs/getting-started/",
					"Category": "Photography"
				},
				{
					"API": "Dagpi",
					"Description": "Image manipulation and processing",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dagpi.xyz",
					"Category": "Photography"
				},
				{
					"API": "Duply",
					"Description": "Generate, Edit, Scale and Manage Images and Videos Smarter & Faster",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://duply.co/docs#getting-started-api",
					"Category": "Photography"
				},
				{
					"API": "DynaPictures",
					"Description": "Generate Hundreds of Personalized Images in Minutes",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dynapictures.com/docs/",
					"Category": "Photography"
				},
				{
					"API": "Flickr",
					"Description": "Flickr Services",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.flickr.com/services/api/",
					"Category": "Photography"
				},
				{
					"API": "Getty Images",
					"Description": "Build applications using the world's most powerful imagery",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://developers.gettyimages.com/en/",
					"Category": "Photography"
				},
				{
					"API": "Gfycat",
					"Description": "Jiffier GIFs",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.gfycat.com/api/",
					"Category": "Photography"
				},
				{
					"API": "Giphy",
					"Description": "Get all your gifs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.giphy.com/docs/",
					"Category": "Photography"
				},
				{
					"API": "Google Photos",
					"Description": "Integrate Google Photos with your apps or devices",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/photos",
					"Category": "Photography"
				},
				{
					"API": "Image Upload",
					"Description": "Image Optimization",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apilayer.com/marketplace/image_upload-api",
					"Category": "Photography"
				},
				{
					"API": "Imgur",
					"Description": "Images",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apidocs.imgur.com/",
					"Category": "Photography"
				},
				{
					"API": "Imsea",
					"Description": "Free image search",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://imsea.herokuapp.com/",
					"Category": "Photography"
				},
				{
					"API": "Lorem Picsum",
					"Description": "Images from Unsplash",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://picsum.photos/",
					"Category": "Photography"
				},
				{
					"API": "ObjectCut",
					"Description": "Image Background removal",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://objectcut.com/",
					"Category": "Photography"
				},
				{
					"API": "Pexels",
					"Description": "Free Stock Photos and Videos",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.pexels.com/api/",
					"Category": "Photography"
				},
				{
					"API": "PhotoRoom",
					"Description": "Remove background from images",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.photoroom.com/api/",
					"Category": "Photography"
				},
				{
					"API": "Pixabay",
					"Description": "Photography",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pixabay.com/sk/service/about/api/",
					"Category": "Photography"
				},
				{
					"API": "PlaceKeanu",
					"Description": "Resizable Keanu Reeves placeholder images with grayscale and young Keanu options",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://placekeanu.com/",
					"Category": "Photography"
				},
				{
					"API": "Readme typing SVG",
					"Description": "Customizable typing and deleting text SVG",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/DenverCoder1/readme-typing-svg",
					"Category": "Photography"
				},
				{
					"API": "Remove.bg",
					"Description": "Image Background removal",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.remove.bg/api",
					"Category": "Photography"
				},
				{
					"API": "ReSmush.it",
					"Description": "Photo optimization",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://resmush.it/api",
					"Category": "Photography"
				},
				{
					"API": "shutterstock",
					"Description": "Stock Photos and Videos",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api-reference.shutterstock.com/",
					"Category": "Photography"
				},
				{
					"API": "Sirv",
					"Description": "Image management solutions like optimization, manipulation, hosting",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apidocs.sirv.com/",
					"Category": "Photography"
				},
				{
					"API": "Unsplash",
					"Description": "Photography",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://unsplash.com/developers",
					"Category": "Photography"
				},
				{
					"API": "Wallhaven",
					"Description": "Wallpapers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://wallhaven.cc/help/api",
					"Category": "Photography"
				},
				{
					"API": "Webdam",
					"Description": "Images",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.damsuccess.com/hc/en-us/articles/202134055-REST-API",
					"Category": "Photography"
				},
				{
					"API": "Codeforces",
					"Description": "Get access to Codeforces data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://codeforces.com/apiHelp",
					"Category": "Programming"
				},
				{
					"API": "Hackerearth",
					"Description": "For compiling and running code in several languages",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.hackerearth.com/docs/wiki/developers/v4/",
					"Category": "Programming"
				},
				{
					"API": "Judge0 CE",
					"Description": "Online code execution system",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ce.judge0.com/",
					"Category": "Programming"
				},
				{
					"API": "KONTESTS",
					"Description": "For upcoming and ongoing competitive coding contests",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://kontests.net/api",
					"Category": "Programming"
				},
				{
					"API": "Mintlify",
					"Description": "For programmatically generating documentation for code",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.mintlify.com",
					"Category": "Programming"
				},
				{
					"API": "arcsecond.io",
					"Description": "Multiple astronomy data sources",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.arcsecond.io/",
					"Category": "Science & Math"
				},
				{
					"API": "arXiv",
					"Description": "Curated research-sharing platform: physics, mathematics, quantitative finance, and economics",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://arxiv.org/help/api/user-manual",
					"Category": "Science & Math"
				},
				{
					"API": "CORE",
					"Description": "Access the world's Open Access research papers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://core.ac.uk/services#api",
					"Category": "Science & Math"
				},
				{
					"API": "GBIF",
					"Description": "Global Biodiversity Information Facility",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.gbif.org/developer/summary",
					"Category": "Science & Math"
				},
				{
					"API": "iDigBio",
					"Description": "Access millions of museum specimens from organizations around the world",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/idigbio/idigbio-search-api/wiki",
					"Category": "Science & Math"
				},
				{
					"API": "inspirehep.net",
					"Description": "High Energy Physics info. system",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/inspirehep/rest-api-doc",
					"Category": "Science & Math"
				},
				{
					"API": "isEven (humor)",
					"Description": "Check if a number is even",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://isevenapi.xyz/",
					"Category": "Science & Math"
				},
				{
					"API": "ISRO",
					"Description": "ISRO Space Crafts Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://isro.vercel.app",
					"Category": "Science & Math"
				},
				{
					"API": "ITIS",
					"Description": "Integrated Taxonomic Information System",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.itis.gov/ws_description.html",
					"Category": "Science & Math"
				},
				{
					"API": "Launch Library 2",
					"Description": "Spaceflight launches and events database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://thespacedevs.com/llapi",
					"Category": "Science & Math"
				},
				{
					"API": "Materials Platform for Data Science",
					"Description": "Curated experimental data for materials science",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://mpds.io",
					"Category": "Science & Math"
				},
				{
					"API": "Minor Planet Center",
					"Description": "Asterank.com Information",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.asterank.com/mpc",
					"Category": "Science & Math"
				},
				{
					"API": "NASA",
					"Description": "NASA data, including imagery",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://api.nasa.gov",
					"Category": "Science & Math"
				},
				{
					"API": "NASA ADS",
					"Description": "NASA Astrophysics Data System",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://ui.adsabs.harvard.edu/help/api/api-docs.html",
					"Category": "Science & Math"
				},
				{
					"API": "Newton",
					"Description": "Symbolic and Arithmetic Math Calculator",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://newton.vercel.app",
					"Category": "Science & Math"
				},
				{
					"API": "Noctua",
					"Description": "REST API used to access NoctuaSky features",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.noctuasky.com/api/v1/swaggerdoc/",
					"Category": "Science & Math"
				},
				{
					"API": "Numbers",
					"Description": "Number of the day, random number, number facts and anything else you want to do with numbers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://math.tools/api/numbers/",
					"Category": "Science & Math"
				},
				{
					"API": "Numbers",
					"Description": "Facts about numbers",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "http://numbersapi.com",
					"Category": "Science & Math"
				},
				{
					"API": "Ocean Facts",
					"Description": "Facts pertaining to the physical science of Oceanography",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://oceanfacts.herokuapp.com/",
					"Category": "Science & Math"
				},
				{
					"API": "Open Notify",
					"Description": "ISS astronauts, current location, etc",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "http://open-notify.org/Open-Notify-API/",
					"Category": "Science & Math"
				},
				{
					"API": "Open Science Framework",
					"Description": "Repository and archive for study designs, research materials, data, manuscripts, etc",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.osf.io",
					"Category": "Science & Math"
				},
				{
					"API": "Purple Air",
					"Description": "Real Time Air Quality Monitoring",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www2.purpleair.com/",
					"Category": "Science & Math"
				},
				{
					"API": "Remote Calc",
					"Description": "Decodes base64 encoding and parses it to return a solution to the calculation in JSON",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/elizabethadegbaju/remotecalc",
					"Category": "Science & Math"
				},
				{
					"API": "SHARE",
					"Description": "A free, open, dataset about research and scholarly activities",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://share.osf.io/api/v2/",
					"Category": "Science & Math"
				},
				{
					"API": "SpaceX",
					"Description": "Company, vehicle, launchpad and launch data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/r-spacex/SpaceX-API",
					"Category": "Science & Math"
				},
				{
					"API": "SpaceX",
					"Description": "GraphQL, Company, Ships, launchpad and launch data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.spacex.land/graphql/",
					"Category": "Science & Math"
				},
				{
					"API": "Sunrise and Sunset",
					"Description": "Sunset and sunrise times for a given latitude and longitude",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://sunrise-sunset.org/api",
					"Category": "Science & Math"
				},
				{
					"API": "Times Adder",
					"Description": "With this API you can add each of the times introduced in the array sended",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/FranP-code/API-Times-Adder",
					"Category": "Science & Math"
				},
				{
					"API": "TLE",
					"Description": "Satellite information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://tle.ivanstanojevic.me/#/docs",
					"Category": "Science & Math"
				},
				{
					"API": "USGS Earthquake Hazards Program",
					"Description": "Earthquakes data real-time",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://earthquake.usgs.gov/fdsnws/event/1/",
					"Category": "Science & Math"
				},
				{
					"API": "USGS Water Services",
					"Description": "Water quality and level info for rivers and lakes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://waterservices.usgs.gov/",
					"Category": "Science & Math"
				},
				{
					"API": "World Bank",
					"Description": "World Data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://datahelpdesk.worldbank.org/knowledgebase/topics/125589",
					"Category": "Science & Math"
				},
				{
					"API": "xMath",
					"Description": "Random mathematical expressions",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://x-math.herokuapp.com/",
					"Category": "Science & Math"
				},
				{
					"API": "Application Environment Verification",
					"Description": "Android library and API to verify the safety of user devices, detect rooted devices and other risks",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/fingerprintjs/aev",
					"Category": "Security"
				},
				{
					"API": "BinaryEdge",
					"Description": "Provide access to BinaryEdge 40fy scanning platform",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.binaryedge.io/api-v2.html",
					"Category": "Security"
				},
				{
					"API": "BitWarden",
					"Description": "Best open-source password manager",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bitwarden.com/help/api/",
					"Category": "Security"
				},
				{
					"API": "Botd",
					"Description": "Botd is a browser library for JavaScript bot detection",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/fingerprintjs/botd",
					"Category": "Security"
				},
				{
					"API": "Bugcrowd",
					"Description": "Bugcrowd API for interacting and tracking the reported issues programmatically",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.bugcrowd.com/api/getting-started/",
					"Category": "Security"
				},
				{
					"API": "Censys",
					"Description": "Search engine for Internet connected host and devices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://search.censys.io/api",
					"Category": "Security"
				},
				{
					"API": "Classify",
					"Description": "Encrypting & decrypting text messages",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://classify-web.herokuapp.com/#/api",
					"Category": "Security"
				},
				{
					"API": "Complete Criminal Checks",
					"Description": "Provides data of offenders from all U.S. States and Pureto Rico",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://completecriminalchecks.com/Developers",
					"Category": "Security"
				},
				{
					"API": "CRXcavator",
					"Description": "Chrome extension risk scoring",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://crxcavator.io/apidocs",
					"Category": "Security"
				},
				{
					"API": "Dehash.lt",
					"Description": "Hash decryption MD5, SHA1, SHA3, SHA256, SHA384, SHA512",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/Dehash-lt/api",
					"Category": "Security"
				},
				{
					"API": "EmailRep",
					"Description": "Email address threat and risk prediction",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.emailrep.io/",
					"Category": "Security"
				},
				{
					"API": "Escape",
					"Description": "An API for escaping different kind of queries",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/polarspetroll/EscapeAPI",
					"Category": "Security"
				},
				{
					"API": "FilterLists",
					"Description": "Lists of filters for adblockers and firewalls",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://filterlists.com",
					"Category": "Security"
				},
				{
					"API": "FingerprintJS Pro",
					"Description": "Fraud detection API offering highly accurate browser fingerprinting",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dev.fingerprintjs.com/docs",
					"Category": "Security"
				},
				{
					"API": "FraudLabs Pro",
					"Description": "Screen order information using AI to detect frauds",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.fraudlabspro.com/developer/api/screen-order",
					"Category": "Security"
				},
				{
					"API": "FullHunt",
					"Description": "Searchable attack surface database of the entire internet",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api-docs.fullhunt.io/#introduction",
					"Category": "Security"
				},
				{
					"API": "GitGuardian",
					"Description": "Scan files for secrets (API Keys, database credentials)",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://api.gitguardian.com/doc",
					"Category": "Security"
				},
				{
					"API": "GreyNoise",
					"Description": "Query IPs in the GreyNoise dataset and retrieve a subset of the full IP context data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.greynoise.io/reference/get_v3-community-ip",
					"Category": "Security"
				},
				{
					"API": "HackerOne",
					"Description": "The industry’s first hacker API that helps increase productivity towards creative bug bounty hunting",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.hackerone.com/",
					"Category": "Security"
				},
				{
					"API": "Hashable",
					"Description": "A REST API to access high level cryptographic functions and methods",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://hashable.space/pages/api/",
					"Category": "Security"
				},
				{
					"API": "HaveIBeenPwned",
					"Description": "Passwords which have previously been exposed in data breaches",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://haveibeenpwned.com/API/v3",
					"Category": "Security"
				},
				{
					"API": "Intelligence X",
					"Description": "Perform OSINT via Intelligence X",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/IntelligenceX/SDK/blob/master/Intelligence%20X%20API.pdf",
					"Category": "Security"
				},
				{
					"API": "LoginRadius",
					"Description": "Managed User Authentication Service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.loginradius.com/docs/",
					"Category": "Security"
				},
				{
					"API": "Microsoft Security Response Center (MSRC)",
					"Description": "Programmatic interfaces to engage with the Microsoft Security Response Center (MSRC)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://msrc.microsoft.com/report/developer",
					"Category": "Security"
				},
				{
					"API": "Mozilla http scanner",
					"Description": "Mozilla observatory http scanner",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md",
					"Category": "Security"
				},
				{
					"API": "Mozilla tls scanner",
					"Description": "Mozilla observatory tls scanner",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/mozilla/tls-observatory#api-endpoints",
					"Category": "Security"
				},
				{
					"API": "National Vulnerability Database",
					"Description": "U.S. National Vulnerability Database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://nvd.nist.gov/vuln/Data-Feeds/JSON-feed-changelog",
					"Category": "Security"
				},
				{
					"API": "Passwordinator",
					"Description": "Generate random passwords of varying complexities",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/fawazsullia/password-generator/",
					"Category": "Security"
				},
				{
					"API": "PhishStats",
					"Description": "Phishing database",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://phishstats.info/",
					"Category": "Security"
				},
				{
					"API": "Privacy.com",
					"Description": "Generate merchant-specific and one-time use credit card numbers that link back to your bank",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://privacy.com/developer/docs",
					"Category": "Security"
				},
				{
					"API": "Pulsedive",
					"Description": "Scan, search and collect threat intelligence data in real-time",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://pulsedive.com/api/",
					"Category": "Security"
				},
				{
					"API": "SecurityTrails",
					"Description": "Domain and IP related information such as current and historical WHOIS and DNS records",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://securitytrails.com/corp/apidocs",
					"Category": "Security"
				},
				{
					"API": "Shodan",
					"Description": "Search engine for Internet connected devices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.shodan.io/",
					"Category": "Security"
				},
				{
					"API": "Spyse",
					"Description": "Access data on all Internet assets and build powerful attack surface management applications",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://spyse-dev.readme.io/reference/quick-start",
					"Category": "Security"
				},
				{
					"API": "Threat Jammer",
					"Description": "Risk scoring service from curated threat intelligence data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://threatjammer.com/docs/index",
					"Category": "Security"
				},
				{
					"API": "UK Police",
					"Description": "UK Police data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.police.uk/docs/",
					"Category": "Security"
				},
				{
					"API": "Virushee",
					"Description": "Virushee file/data scanning",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.virushee.com/",
					"Category": "Security"
				},
				{
					"API": "VulDB",
					"Description": "VulDB API allows to initiate queries for one or more items along with transactional bots",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://vuldb.com/?doc.api",
					"Category": "Security"
				},
				{
					"API": "Best Buy",
					"Description": "Products, Buying Options, Categories, Recommendations, Stores and Commerce",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bestbuyapis.github.io/api-documentation/#overview",
					"Category": "Shopping"
				},
				{
					"API": "Digi-Key",
					"Description": "Retrieve price and inventory of electronic components as well as place orders",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.digikey.com/en/resources/api-solutions",
					"Category": "Shopping"
				},
				{
					"API": "Dummy Products",
					"Description": "An api to fetch dummy e-commerce products JSON data with placeholder images",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dummyproducts-api.herokuapp.com/",
					"Category": "Shopping"
				},
				{
					"API": "eBay",
					"Description": "Sell and Buy on eBay",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.ebay.com/",
					"Category": "Shopping"
				},
				{
					"API": "Etsy",
					"Description": "Manage shop and interact with listings",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.etsy.com/developers/documentation/getting_started/api_basics",
					"Category": "Shopping"
				},
				{
					"API": "Flipkart Marketplace",
					"Description": "Product listing management, Order Fulfilment in the Flipkart Marketplace",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://seller.flipkart.com/api-docs/FMSAPI.html",
					"Category": "Shopping"
				},
				{
					"API": "Lazada",
					"Description": "Retrieve product ratings and seller performance metrics",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://open.lazada.com/doc/doc.htm",
					"Category": "Shopping"
				},
				{
					"API": "Mercadolibre",
					"Description": "Manage sales, ads, products, services and Shops",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.mercadolibre.cl/es_ar/api-docs-es",
					"Category": "Shopping"
				},
				{
					"API": "Octopart",
					"Description": "Electronic part data for manufacturing, design, and sourcing",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://octopart.com/api/v4/reference",
					"Category": "Shopping"
				},
				{
					"API": "OLX Poland",
					"Description": "Integrate with local sites by posting, managing adverts and communicating with OLX users",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.olx.pl/api/doc#section/",
					"Category": "Shopping"
				},
				{
					"API": "Rappi",
					"Description": "Manage orders from Rappi's app",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dev-portal.rappi.com/",
					"Category": "Shopping"
				},
				{
					"API": "Shopee",
					"Description": "Shopee's official API for integration of various services from Shopee",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://open.shopee.com/documents?version=1",
					"Category": "Shopping"
				},
				{
					"API": "Tokopedia",
					"Description": "Tokopedia's Official API for integration of various services from Tokopedia",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.tokopedia.com/openapi/guide/#/",
					"Category": "Shopping"
				},
				{
					"API": "WooCommerce",
					"Description": "WooCommerce REST APIS to create, read, update, and delete data on wordpress website in JSON format",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://woocommerce.github.io/woocommerce-rest-api-docs/",
					"Category": "Shopping"
				},
				{
					"API": "4chan",
					"Description": "Simple image-based bulletin board dedicated to a variety of topics",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/4chan/4chan-API",
					"Category": "Social"
				},
				{
					"API": "Ayrshare",
					"Description": "Social media APIs to post, get analytics, and manage multiple users social media accounts",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.ayrshare.com",
					"Category": "Social"
				},
				{
					"API": "aztro",
					"Description": "Daily horoscope info for yesterday, today, and tomorrow",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://aztro.sameerkumar.website/",
					"Category": "Social"
				},
				{
					"API": "Blogger",
					"Description": "The Blogger APIs allows client applications to view and update Blogger content",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/blogger/",
					"Category": "Social"
				},
				{
					"API": "Cisco Spark",
					"Description": "Team Collaboration Software",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.ciscospark.com",
					"Category": "Social"
				},
				{
					"API": "Dangerous Discord Database",
					"Description": "Database of malicious Discord accounts",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://discord.riverside.rocks/docs/index.php",
					"Category": "Social"
				},
				{
					"API": "Discord",
					"Description": "Make bots for Discord, integrate Discord onto an external platform",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://discord.com/developers/docs/intro",
					"Category": "Social"
				},
				{
					"API": "Disqus",
					"Description": "Communicate with Disqus data",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://disqus.com/api/docs/auth/",
					"Category": "Social"
				},
				{
					"API": "Doge-Meme",
					"Description": "Top meme posts from r/dogecoin which include 'Meme' flair",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.doge-meme.lol/docs",
					"Category": "Social"
				},
				{
					"API": "Facebook",
					"Description": "Facebook Login, Share on FB, Social Plugins, Analytics and more",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.facebook.com/",
					"Category": "Social"
				},
				{
					"API": "Foursquare",
					"Description": "Interact with Foursquare users and places (geolocation-based checkins, photos, tips, events, etc)",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.foursquare.com/",
					"Category": "Social"
				},
				{
					"API": "Fuck Off as a Service",
					"Description": "Asks someone to fuck off",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.foaas.com",
					"Category": "Social"
				},
				{
					"API": "Full Contact",
					"Description": "Get Social Media profiles and contact Information",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.fullcontact.com/",
					"Category": "Social"
				},
				{
					"API": "HackerNews",
					"Description": "Social news for CS and entrepreneurship",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/HackerNews/API",
					"Category": "Social"
				},
				{
					"API": "Hashnode",
					"Description": "A blogging platform built for developers",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://hashnode.com",
					"Category": "Social"
				},
				{
					"API": "Instagram",
					"Description": "Instagram Login, Share on Instagram, Social Plugins and more",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.instagram.com/developer/",
					"Category": "Social"
				},
				{
					"API": "Kakao",
					"Description": "Kakao Login, Share on KakaoTalk, Social Plugins and more",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.kakao.com/",
					"Category": "Social"
				},
				{
					"API": "Lanyard",
					"Description": "Retrieve your presence on Discord through an HTTP REST API or WebSocket",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/Phineas/lanyard",
					"Category": "Social"
				},
				{
					"API": "Line",
					"Description": "Line Login, Share on Line, Social Plugins and more",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.line.biz/",
					"Category": "Social"
				},
				{
					"API": "LinkedIn",
					"Description": "The foundation of all digital integrations with LinkedIn",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.microsoft.com/en-us/linkedin/?context=linkedin/context",
					"Category": "Social"
				},
				{
					"API": "Meetup.com",
					"Description": "Data about Meetups from Meetup.com",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.meetup.com/api/guide",
					"Category": "Social"
				},
				{
					"API": "Microsoft Graph",
					"Description": "Access the data and intelligence in Microsoft 365, Windows 10, and Enterprise Mobility",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.microsoft.com/en-us/graph/api/overview",
					"Category": "Social"
				},
				{
					"API": "NAVER",
					"Description": "NAVER Login, Share on NAVER, Social Plugins and more",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.naver.com/main/",
					"Category": "Social"
				},
				{
					"API": "Open Collective",
					"Description": "Get Open Collective data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.opencollective.com/help/developers/api",
					"Category": "Social"
				},
				{
					"API": "Pinterest",
					"Description": "The world's catalog of ideas",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.pinterest.com/",
					"Category": "Social"
				},
				{
					"API": "Product Hunt",
					"Description": "The best new products in tech",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.producthunt.com/v2/docs",
					"Category": "Social"
				},
				{
					"API": "Reddit",
					"Description": "Homepage of the internet",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.reddit.com/dev/api",
					"Category": "Social"
				},
				{
					"API": "Revolt",
					"Description": "Revolt open source Discord alternative",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.revolt.chat/api/",
					"Category": "Social"
				},
				{
					"API": "Saidit",
					"Description": "Open Source Reddit Clone",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.saidit.net/dev/api",
					"Category": "Social"
				},
				{
					"API": "Slack",
					"Description": "Team Instant Messaging",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.slack.com/",
					"Category": "Social"
				},
				{
					"API": "TamTam",
					"Description": "Bot API to interact with TamTam",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dev.tamtam.chat/",
					"Category": "Social"
				},
				{
					"API": "Telegram Bot",
					"Description": "Simplified HTTP version of the MTProto API for bots",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://core.telegram.org/bots/api",
					"Category": "Social"
				},
				{
					"API": "Telegram MTProto",
					"Description": "Read and write Telegram data",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://core.telegram.org/api#getting-started",
					"Category": "Social"
				},
				{
					"API": "Telegraph",
					"Description": "Create attractive blogs easily, to share",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://telegra.ph/api",
					"Category": "Social"
				},
				{
					"API": "TikTok",
					"Description": "Fetches user info and user's video posts on TikTok platform",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.tiktok.com/doc/login-kit-web",
					"Category": "Social"
				},
				{
					"API": "Trash Nothing",
					"Description": "A freecycling community with thousands of free items posted every day",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://trashnothing.com/developer",
					"Category": "Social"
				},
				{
					"API": "Tumblr",
					"Description": "Read and write Tumblr Data",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.tumblr.com/docs/en/api/v2",
					"Category": "Social"
				},
				{
					"API": "Twitch",
					"Description": "Game Streaming API",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dev.twitch.tv/docs",
					"Category": "Social"
				},
				{
					"API": "Twitter",
					"Description": "Read and write Twitter data",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://developer.twitter.com/en/docs",
					"Category": "Social"
				},
				{
					"API": "vk",
					"Description": "Read and write vk data",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://vk.com/dev/sites",
					"Category": "Social"
				},
				{
					"API": "API-FOOTBALL",
					"Description": "Get information about Football Leagues & Cups",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.api-football.com/documentation-v3",
					"Category": "Sports & Fitness"
				},
				{
					"API": "ApiMedic",
					"Description": "ApiMedic offers a medical symptom checker API primarily for patients",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://apimedic.com/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "balldontlie",
					"Description": "Balldontlie provides access to stats data from the NBA",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.balldontlie.io",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Canadian Football League (CFL)",
					"Description": "Official JSON API providing real-time league, team and player statistics about the CFL",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "http://api.cfl.ca/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "City Bikes",
					"Description": "City Bikes around the world",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.citybik.es/v2/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Cloudbet",
					"Description": "Official Cloudbet API provides real-time sports odds and betting API to place bets programmatically",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.cloudbet.com/api/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "CollegeFootballData.com",
					"Description": "Unofficial detailed American college football statistics, records, and results API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://collegefootballdata.com",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Ergast F1",
					"Description": "F1 data from the beginning of the world championships in 1950",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://ergast.com/mrd/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Fitbit",
					"Description": "Fitbit Information",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dev.fitbit.com/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Football",
					"Description": "A simple Open Source Football API to get squads’ stats, best scorers and more",
					"Auth": "X-Mashape-Key",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/GiulianoCrescimbeni/api/football98/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Football (Soccer) Videos",
					"Description": "Embed codes for goals and highlights from Premier League, Bundesliga, Serie A and many more",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.scorebat.com/video-api/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Football Standings",
					"Description": "Display football standings e.g epl, la liga, serie a etc. The data is based on espn site",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/azharimm/football-standings-api",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Football-Data",
					"Description": "Football data with matches info, players, teams, and competitions",
					"Auth": "X-Mashape-Key",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.football-data.org",
					"Category": "Sports & Fitness"
				},
				{
					"API": "JCDecaux Bike",
					"Description": "JCDecaux's self-service bicycles",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.jcdecaux.com/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "MLB Records and Stats",
					"Description": "Current and historical MLB statistics",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://appac.github.io/mlb-data-api-docs/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "NBA Data",
					"Description": "All NBA Stats DATA, Games, Livescore, Standings, Statistics",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/api-sports/api/api-nba/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "NBA Stats",
					"Description": "Current and historical NBA Statistics",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://any-api.com/nba_com/nba_com/docs/API_Description",
					"Category": "Sports & Fitness"
				},
				{
					"API": "NHL Records and Stats",
					"Description": "NHL historical data and statistics",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://gitlab.com/dword4/nhlapi",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Oddsmagnet",
					"Description": "Odds history from multiple UK bookmakers",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://data.oddsmagnet.com",
					"Category": "Sports & Fitness"
				},
				{
					"API": "OpenLigaDB",
					"Description": "Crowd sourced sports league results",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.openligadb.de",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Premier League Standings ",
					"Description": "All Current Premier League Standings and Statistics",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/heisenbug/api/premier-league-live-scores/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Sport Data",
					"Description": "Get sports data from all over the world",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://sportdataapi.com",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Sport List & Data",
					"Description": "List of and resources related to sports",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developers.decathlon.com/products/sports",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Sport Places",
					"Description": "Crowd-source sports places around the world",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://developers.decathlon.com/products/sport-places",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Sport Vision",
					"Description": "Identify sport, brands and gear in an image. Also does image sports captioning",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developers.decathlon.com/products/sport-vision",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Sportmonks Cricket",
					"Description": "Live cricket score, player statistics and fantasy API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.sportmonks.com/cricket/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Sportmonks Football",
					"Description": "Football score/schedule, news api, tv channels, stats, history, display standing e.g. epl, la liga",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.sportmonks.com/football/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Squiggle",
					"Description": "Fixtures, results and predictions for Australian Football League matches",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.squiggle.com.au",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Strava",
					"Description": "Connect with athletes, activities and more",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://strava.github.io/api/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "SuredBits",
					"Description": "Query sports data, including teams, players, games, scores and statistics",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "https://suredbits.com/api/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "TheSportsDB",
					"Description": "Crowd-Sourced Sports Data and Artwork",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.thesportsdb.com/api.php",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Tredict",
					"Description": "Get and set activities, health data and more",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.tredict.com/blog/oauth_docs/",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Wger",
					"Description": "Workout manager data as exercises, muscles or equipment",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://wger.de/en/software/api",
					"Category": "Sports & Fitness"
				},
				{
					"API": "Bacon Ipsum",
					"Description": "A Meatier Lorem Ipsum Generator",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://baconipsum.com/json-api/",
					"Category": "Test Data"
				},
				{
					"API": "Dicebear Avatars",
					"Description": "Generate random pixel-art avatars",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://avatars.dicebear.com/",
					"Category": "Test Data"
				},
				{
					"API": "English Random Words",
					"Description": "Generate English Random Words with Pronunciation",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://random-words-api.vercel.app/word",
					"Category": "Test Data"
				},
				{
					"API": "FakeJSON",
					"Description": "Service to generate test and fake data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://fakejson.com",
					"Category": "Test Data"
				},
				{
					"API": "FakerAPI",
					"Description": "APIs collection to get fake data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://fakerapi.it/en",
					"Category": "Test Data"
				},
				{
					"API": "FakeStoreAPI",
					"Description": "Fake store rest API for your e-commerce or shopping website prototype",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://fakestoreapi.com/",
					"Category": "Test Data"
				},
				{
					"API": "GeneradorDNI",
					"Description": "Data generator API. Profiles, vehicles, banks and cards, etc",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.generadordni.es",
					"Category": "Test Data"
				},
				{
					"API": "ItsThisForThat",
					"Description": "Generate Random startup ideas",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://itsthisforthat.com/api.php",
					"Category": "Test Data"
				},
				{
					"API": "JSONPlaceholder",
					"Description": "Fake data for testing and prototyping",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://jsonplaceholder.typicode.com/",
					"Category": "Test Data"
				},
				{
					"API": "Loripsum",
					"Description": "The \"lorem ipsum\" generator that doesn't suck",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://loripsum.net/",
					"Category": "Test Data"
				},
				{
					"API": "Mailsac",
					"Description": "Disposable Email",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://mailsac.com/docs/api",
					"Category": "Test Data"
				},
				{
					"API": "Metaphorsum",
					"Description": "Generate demo paragraphs giving number of words and sentences",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://metaphorpsum.com/",
					"Category": "Test Data"
				},
				{
					"API": "Mockaroo",
					"Description": "Generate fake data to JSON, CSV, TXT, SQL and XML",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mockaroo.com/docs",
					"Category": "Test Data"
				},
				{
					"API": "QuickMocker",
					"Description": "API mocking tool to generate contextual, fake or random data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://quickmocker.com",
					"Category": "Test Data"
				},
				{
					"API": "Random Data",
					"Description": "Random data generator",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://random-data-api.com",
					"Category": "Test Data"
				},
				{
					"API": "Randommer",
					"Description": "Random data generator",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://randommer.io/randommer-api",
					"Category": "Test Data"
				},
				{
					"API": "RandomUser",
					"Description": "Generates and list user data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://randomuser.me",
					"Category": "Test Data"
				},
				{
					"API": "RoboHash",
					"Description": "Generate random robot/alien avatars",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://robohash.org/",
					"Category": "Test Data"
				},
				{
					"API": "Spanish random names",
					"Description": "Generate spanish names (with gender) randomly",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://random-names-api.herokuapp.com/public",
					"Category": "Test Data"
				},
				{
					"API": "Spanish random words",
					"Description": "Generate spanish words randomly",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://palabras-aleatorias-public-api.herokuapp.com",
					"Category": "Test Data"
				},
				{
					"API": "This Person Does not Exist",
					"Description": "Generates real-life faces of people who do not exist",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://thispersondoesnotexist.com",
					"Category": "Test Data"
				},
				{
					"API": "Toolcarton",
					"Description": "Generate random testimonial data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://testimonialapi.toolcarton.com/",
					"Category": "Test Data"
				},
				{
					"API": "UUID Generator",
					"Description": "Generate UUIDs",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://www.uuidtools.com/docs",
					"Category": "Test Data"
				},
				{
					"API": "What The Commit",
					"Description": "Random commit message generator",
					"Auth": "",
					"HTTPS": false,
					"Cors": "yes",
					"Link": "http://whatthecommit.com/index.txt",
					"Category": "Test Data"
				},
				{
					"API": "Yes No",
					"Description": "Generate yes or no randomly",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://yesno.wtf/api",
					"Category": "Test Data"
				},
				{
					"API": "Code Detection API",
					"Description": "Detect, label, format and enrich the code in your app or in your data pipeline",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://codedetectionapi.runtime.dev",
					"Category": "Text Analysis"
				},
				{
					"API": "apilayer languagelayer",
					"Description": "Language Detection JSON API supporting 173 languages",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://languagelayer.com/",
					"Category": "Text Analysis"
				},
				{
					"API": "Aylien Text Analysis",
					"Description": "A collection of information retrieval and natural language APIs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.aylien.com/textapi/#getting-started",
					"Category": "Text Analysis"
				},
				{
					"API": "Cloudmersive Natural Language Processing",
					"Description": "Natural language processing and text analysis",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.cloudmersive.com/nlp-api",
					"Category": "Text Analysis"
				},
				{
					"API": "Detect Language",
					"Description": "Detects text language",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://detectlanguage.com/",
					"Category": "Text Analysis"
				},
				{
					"API": "ELI",
					"Description": "Natural Language Processing Tools for Thai Language",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://nlp.insightera.co.th/docs/v1.0",
					"Category": "Text Analysis"
				},
				{
					"API": "Google Cloud Natural",
					"Description": "Natural language understanding technology, including sentiment, entity and syntax analysis",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://cloud.google.com/natural-language/docs/",
					"Category": "Text Analysis"
				},
				{
					"API": "Hirak OCR",
					"Description": "Image to text -text recognition- from image more than 100 language, accurate, unlimited requests",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ocr.hirak.site/",
					"Category": "Text Analysis"
				},
				{
					"API": "Hirak Translation",
					"Description": "Translate between 21 of most used languages, accurate, unlimited requests",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://translate.hirak.site/",
					"Category": "Text Analysis"
				},
				{
					"API": "Lecto Translation",
					"Description": "Translation API with free tier and reasonable prices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://rapidapi.com/lecto-lecto-default/api/lecto-translation/",
					"Category": "Text Analysis"
				},
				{
					"API": "LibreTranslate",
					"Description": "Translation tool with 17 available languages",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://libretranslate.com/docs",
					"Category": "Text Analysis"
				},
				{
					"API": "Semantria",
					"Description": "Text Analytics with sentiment analysis, categorization & named entity extraction",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://semantria.readme.io/docs",
					"Category": "Text Analysis"
				},
				{
					"API": "Sentiment Analysis",
					"Description": "Multilingual sentiment analysis of texts from different sources",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.meaningcloud.com/developer/sentiment-analysis",
					"Category": "Text Analysis"
				},
				{
					"API": "Tisane",
					"Description": "Text Analytics with focus on detection of abusive content and law enforcement applications",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://tisane.ai/",
					"Category": "Text Analysis"
				},
				{
					"API": "Watson Natural Language Understanding",
					"Description": "Natural language processing for advanced text analysis",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding",
					"Category": "Text Analysis"
				},
				{
					"API": "Aftership",
					"Description": "API to update, manage and track shipment efficiently",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developers.aftership.com/reference/quick-start",
					"Category": "Tracking"
				},
				{
					"API": "Correios",
					"Description": "Integration to provide information and prepare shipments using Correio's services",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://cws.correios.com.br/ajuda",
					"Category": "Tracking"
				},
				{
					"API": "Pixela",
					"Description": "API for recording and tracking habits or effort, routines",
					"Auth": "X-Mashape-Key",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://pixe.la",
					"Category": "Tracking"
				},
				{
					"API": "PostalPinCode",
					"Description": "API for getting Pincode details in India",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://www.postalpincode.in/Api-Details",
					"Category": "Tracking"
				},
				{
					"API": "Postmon",
					"Description": "An API to query Brazilian ZIP codes and orders easily, quickly and free",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://postmon.com.br",
					"Category": "Tracking"
				},
				{
					"API": "PostNord",
					"Description": "Provides information about parcels in transport for Sweden and Denmark",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://developer.postnord.com/api",
					"Category": "Tracking"
				},
				{
					"API": "UPS",
					"Description": "Shipment and Address information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.ups.com/upsdeveloperkit",
					"Category": "Tracking"
				},
				{
					"API": "WeCanTrack",
					"Description": "Automatically place subids in affiliate links to attribute affiliate conversions to click data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.wecantrack.com",
					"Category": "Tracking"
				},
				{
					"API": "WhatPulse",
					"Description": "Small application that measures your keyboard/mouse usage",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.whatpulse.org/#web-api",
					"Category": "Tracking"
				},
				{
					"API": "ADS-B Exchange",
					"Description": "Access real-time and historical data of any and all airborne aircraft",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.adsbexchange.com/data/",
					"Category": "Transportation"
				},
				{
					"API": "airportsapi",
					"Description": "Get name and website-URL for airports by ICAO code",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://airport-web.appspot.com/api/docs/",
					"Category": "Transportation"
				},
				{
					"API": "AIS Hub",
					"Description": "Real-time data of any marine and inland vessel equipped with AIS tracking system",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.aishub.net/api",
					"Category": "Transportation"
				},
				{
					"API": "Amadeus for Developers",
					"Description": "Travel Search - Limited usage",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.amadeus.com/self-service",
					"Category": "Transportation"
				},
				{
					"API": "apilayer aviationstack",
					"Description": "Real-time Flight Status & Global Aviation Data API",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://aviationstack.com/",
					"Category": "Transportation"
				},
				{
					"API": "AviationAPI",
					"Description": "FAA Aeronautical Charts and Publications, Airport Information, and Airport Weather",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://docs.aviationapi.com",
					"Category": "Transportation"
				},
				{
					"API": "AZ511",
					"Description": "Access traffic data from the ADOT API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.az511.com/developers/doc",
					"Category": "Transportation"
				},
				{
					"API": "Bay Area Rapid Transit",
					"Description": "Stations and predicted arrivals for BART",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://api.bart.gov",
					"Category": "Transportation"
				},
				{
					"API": "BC Ferries",
					"Description": "Sailing times and capacities for BC Ferries",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.bcferriesapi.ca",
					"Category": "Transportation"
				},
				{
					"API": "BIC-Boxtech",
					"Description": "Container technical detail for the global container fleet",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.bic-boxtech.org/",
					"Category": "Transportation"
				},
				{
					"API": "BlaBlaCar",
					"Description": "Search car sharing trips",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dev.blablacar.com",
					"Category": "Transportation"
				},
				{
					"API": "Boston MBTA Transit",
					"Description": "Stations and predicted arrivals for MBTA",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.mbta.com/developers/v3-api",
					"Category": "Transportation"
				},
				{
					"API": "Community Transit",
					"Description": "Transitland API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/transitland/transitland-datastore/blob/master/README.md#api-endpoints",
					"Category": "Transportation"
				},
				{
					"API": "Compare Flight Prices",
					"Description": "API for comparing flight prices across platforms",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://rapidapi.com/obryan-software-obryan-software-default/api/compare-flight-prices/",
					"Category": "Transportation"
				},
				{
					"API": "CTS",
					"Description": "CTS Realtime API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.cts-strasbourg.eu/",
					"Category": "Transportation"
				},
				{
					"API": "Grab",
					"Description": "Track deliveries, ride fares, payments and loyalty points",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.grab.com/docs/",
					"Category": "Transportation"
				},
				{
					"API": "GraphHopper",
					"Description": "A-to-B routing with turn-by-turn instructions",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.graphhopper.com/",
					"Category": "Transportation"
				},
				{
					"API": "Icelandic APIs",
					"Description": "Open APIs that deliver services in or regarding Iceland",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://docs.apis.is/",
					"Category": "Transportation"
				},
				{
					"API": "Impala Hotel Bookings",
					"Description": "Hotel content, rates and room bookings",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://docs.impala.travel/docs/booking-api/",
					"Category": "Transportation"
				},
				{
					"API": "Izi",
					"Description": "Audio guide for travellers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://api-docs.izi.travel/",
					"Category": "Transportation"
				},
				{
					"API": "Land Transport Authority DataMall, Singapore",
					"Description": "Singapore transport information",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://datamall.lta.gov.sg/content/dam/datamall/datasets/LTA_DataMall_API_User_Guide.pdf",
					"Category": "Transportation"
				},
				{
					"API": "Metro Lisboa",
					"Description": "Delays in subway lines",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "http://app.metrolisboa.pt/status/getLinhas.php",
					"Category": "Transportation"
				},
				{
					"API": "Navitia",
					"Description": "The open API for building cool stuff with transport data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://doc.navitia.io/",
					"Category": "Transportation"
				},
				{
					"API": "Open Charge Map",
					"Description": "Global public registry of electric vehicle charging locations",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://openchargemap.org/site/develop/api",
					"Category": "Transportation"
				},
				{
					"API": "OpenSky Network",
					"Description": "Free real-time ADS-B aviation data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opensky-network.org/apidoc/index.html",
					"Category": "Transportation"
				},
				{
					"API": "Railway Transport for France",
					"Description": "SNCF public API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.digital.sncf.com/startup/api",
					"Category": "Transportation"
				},
				{
					"API": "REFUGE Restrooms",
					"Description": "Provides safe restroom access for transgender, intersex and gender nonconforming individuals",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.refugerestrooms.org/api/docs/#!/restrooms",
					"Category": "Transportation"
				},
				{
					"API": "Sabre for Developers",
					"Description": "Travel Search - Limited usage",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.sabre.com/guides/travel-agency/quickstart/getting-started-in-travel",
					"Category": "Transportation"
				},
				{
					"API": "Schiphol Airport",
					"Description": "Schiphol",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.schiphol.nl/",
					"Category": "Transportation"
				},
				{
					"API": "Tankerkoenig",
					"Description": "German realtime gas/diesel prices",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://creativecommons.tankerkoenig.de/swagger/",
					"Category": "Transportation"
				},
				{
					"API": "TransitLand",
					"Description": "Transit Aggregation",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.transit.land/documentation/datastore/api-endpoints.html",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Atlanta, US",
					"Description": "Marta",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.itsmarta.com/app-developer-resources.aspx",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Auckland, New Zealand",
					"Description": "Auckland Transport",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://dev-portal.at.govt.nz/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Belgium",
					"Description": "The iRail API is a third-party API for Belgian public transport by train",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.irail.be/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Berlin, Germany",
					"Description": "Third-party VBB API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/derhuerst/vbb-rest/blob/3/docs/index.md",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Bordeaux, France",
					"Description": "Bordeaux Métropole public transport and more (France)",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opendata.bordeaux-metropole.fr/explore/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Budapest, Hungary",
					"Description": "Budapest public transport API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://bkkfutar.docs.apiary.io",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Chicago, US",
					"Description": "Chicago Transit Authority (CTA)",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.transitchicago.com/developers/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Czech Republic",
					"Description": "Czech transport API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.chaps.cz/eng/products/idos-internet",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Denver, US",
					"Description": "RTD",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.rtd-denver.com/gtfs-developer-guide.shtml",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Finland",
					"Description": "Finnish transport API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://digitransit.fi/en/developers/ ",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Germany",
					"Description": "Deutsche Bahn (DB) API",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://data.deutschebahn.com/dataset/api-fahrplan",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Grenoble, France",
					"Description": "Grenoble public transport",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "https://www.mobilites-m.fr/pages/opendata/OpenDataApi.html",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Hessen, Germany",
					"Description": "RMV API (Public Transport in Hessen)",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opendata.rmv.de/site/start.html",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Honolulu, US",
					"Description": "Honolulu Transportation Information",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://hea.thebus.org/api_info.asp",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Lisbon, Portugal",
					"Description": "Data about buses routes, parking and traffic",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://emel.city-platform.com/opendata/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for London, England",
					"Description": "TfL API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.tfl.gov.uk",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Los Angeles, US",
					"Description": "Data about positions of Metro vehicles in real time and travel their routes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.metro.net/api/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Manchester, England",
					"Description": "TfGM transport network data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://developer.tfgm.com/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Norway",
					"Description": "Transport APIs and dataset for Norway",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.entur.org/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Ottawa, Canada",
					"Description": "OC Transpo API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.octranspo.com/en/plan-your-trip/travel-tools/developers",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Paris, France",
					"Description": "RATP Open Data API",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://data.ratp.fr/api/v1/console/datasets/1.0/search/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Philadelphia, US",
					"Description": "SEPTA APIs",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www3.septa.org/hackathon/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Sao Paulo, Brazil",
					"Description": "SPTrans",
					"Auth": "OAuth",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.sptrans.com.br/desenvolvedores/api-do-olho-vivo-guia-de-referencia/documentacao-api/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Spain",
					"Description": "Public trains of Spain",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://data.renfe.com/api/1/util/snippet/api_info.html?resource_id=a2368cff-1562-4dde-8466-9635ea3a572a",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Sweden",
					"Description": "Public Transport consumer",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.trafiklab.se/api",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Switzerland",
					"Description": "Official Swiss Public Transport Open Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opentransportdata.swiss/en/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Switzerland",
					"Description": "Swiss public transport API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://transport.opendata.ch/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for The Netherlands",
					"Description": "NS, only trains",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.ns.nl/reisinformatie/ns-api",
					"Category": "Transportation"
				},
				{
					"API": "Transport for The Netherlands",
					"Description": "OVAPI, country-wide public transport",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/skywave/KV78Turbo-OVAPI/wiki",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Toronto, Canada",
					"Description": "TTC",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://myttc.ca/developers",
					"Category": "Transportation"
				},
				{
					"API": "Transport for UK",
					"Description": "Transport API and dataset for UK",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.transportapi.com",
					"Category": "Transportation"
				},
				{
					"API": "Transport for United States",
					"Description": "NextBus API",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://retro.umoiq.com/xmlFeedDocs/NextBusXMLFeed.pdf",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Vancouver, Canada",
					"Description": "TransLink",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.translink.ca/",
					"Category": "Transportation"
				},
				{
					"API": "Transport for Washington, US",
					"Description": "Washington Metro transport API",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.wmata.com/",
					"Category": "Transportation"
				},
				{
					"API": "transport.rest",
					"Description": "Community maintained, developer-friendly public transport API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://transport.rest",
					"Category": "Transportation"
				},
				{
					"API": "Tripadvisor",
					"Description": "Rating content for a hotel, restaurant, attraction or destination",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer-tripadvisor.com/home/",
					"Category": "Transportation"
				},
				{
					"API": "Uber",
					"Description": "Uber ride requests and price estimation",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://developer.uber.com/products",
					"Category": "Transportation"
				},
				{
					"API": "Velib metropolis, Paris, France",
					"Description": "Velib Open Data API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://www.velib-metropole.fr/donnees-open-data-gbfs-du-service-velib-metropole",
					"Category": "Transportation"
				},
				{
					"API": "1pt",
					"Description": "A simple URL shortener",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/1pt-co/api/blob/main/README.md",
					"Category": "URL Shorteners"
				},
				{
					"API": "Bitly",
					"Description": "URL shortener and link management",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://dev.bitly.com/get_started.html",
					"Category": "URL Shorteners"
				},
				{
					"API": "CleanURI",
					"Description": "URL shortener service",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://cleanuri.com/docs",
					"Category": "URL Shorteners"
				},
				{
					"API": "ClickMeter",
					"Description": "Monitor, compare and optimize your marketing links",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://support.clickmeter.com/hc/en-us/categories/201474986",
					"Category": "URL Shorteners"
				},
				{
					"API": "Clico",
					"Description": "URL shortener service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://cli.com/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config",
					"Category": "URL Shorteners"
				},
				{
					"API": "Cutt.ly",
					"Description": "URL shortener service",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://cutt.ly/api-documentation/cuttly-links-api",
					"Category": "URL Shorteners"
				},
				{
					"API": "Drivet URL Shortener",
					"Description": "Shorten a long URL easily and fast",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://wiki.drivet.xyz/en/url-shortener/add-links",
					"Category": "URL Shorteners"
				},
				{
					"API": "Free Url Shortener",
					"Description": "Free URL Shortener offers a powerful API to interact with other sites",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://ulvis.net/developer.html",
					"Category": "URL Shorteners"
				},
				{
					"API": "Git.io",
					"Description": "Git.io URL shortener",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.blog/2011-11-10-git-io-github-url-shortener/",
					"Category": "URL Shorteners"
				},
				{
					"API": "GoTiny",
					"Description": "A lightweight URL shortener, focused on ease-of-use for the developer and end-user",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/robvanbakel/gotiny-api",
					"Category": "URL Shorteners"
				},
				{
					"API": "Kutt",
					"Description": "Free Modern URL Shortener",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.kutt.it/",
					"Category": "URL Shorteners"
				},
				{
					"API": "Mgnet.me",
					"Description": "Torrent URL shorten API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "http://mgnet.me/api.html",
					"Category": "URL Shorteners"
				},
				{
					"API": "owo",
					"Description": "A simple link obfuscator/shortener",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://owo.vc/api",
					"Category": "URL Shorteners"
				},
				{
					"API": "Rebrandly",
					"Description": "Custom URL shortener for sharing branded links",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.rebrandly.com/v1/docs",
					"Category": "URL Shorteners"
				},
				{
					"API": "Short Link",
					"Description": "Short URLs support so many domains",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/FayasNoushad/Short-Link-API",
					"Category": "URL Shorteners"
				},
				{
					"API": "Shrtcode",
					"Description": "URl Shortener with multiple Domains",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://shrtco.de/docs",
					"Category": "URL Shorteners"
				},
				{
					"API": "Shrtlnk",
					"Description": "Simple and efficient short link creation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://shrtlnk.dev/developer",
					"Category": "URL Shorteners"
				},
				{
					"API": "TinyURL",
					"Description": "Shorten long URLs",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://tinyurl.com/app/dev",
					"Category": "URL Shorteners"
				},
				{
					"API": "UrlBae",
					"Description": "Simple and efficient short link creation",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://urlbae.com/developers",
					"Category": "URL Shorteners"
				},
				{
					"API": "Brazilian Vehicles and Prices",
					"Description": "Vehicles information from Fundação Instituto de Pesquisas Econômicas - Fipe",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://deividfortuna.github.io/fipe/",
					"Category": "Vehicle"
				},
				{
					"API": "Helipaddy sites",
					"Description": "Helicopter and passenger drone landing site directory, Helipaddy data and much more",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://helipaddy.com/api/",
					"Category": "Vehicle"
				},
				{
					"API": "Kelley Blue Book",
					"Description": "Vehicle info, pricing, configuration, plus much more",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "http://developer.kbb.com/#!/data/1-Default",
					"Category": "Vehicle"
				},
				{
					"API": "Mercedes-Benz",
					"Description": "Telematics data, remotely access vehicle functions, car configurator, locate service dealers",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://developer.mercedes-benz.com/apis",
					"Category": "Vehicle"
				},
				{
					"API": "NHTSA",
					"Description": "NHTSA Product Information Catalog and Vehicle Listing",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://vpic.nhtsa.dot.gov/api/",
					"Category": "Vehicle"
				},
				{
					"API": "Smartcar",
					"Description": "Lock and unlock vehicles and get data like odometer reading and location. Works on most new cars",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://smartcar.com/docs/",
					"Category": "Vehicle"
				},
				{
					"API": "An API of Ice And Fire",
					"Description": "Game Of Thrones API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://anapioficeandfire.com/",
					"Category": "Video"
				},
				{
					"API": "Bob's Burgers",
					"Description": "Bob's Burgers API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://bobs-burgers-api-ui.herokuapp.com",
					"Category": "Video"
				},
				{
					"API": "Breaking Bad",
					"Description": "Breaking Bad API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://breakingbadapi.com/documentation",
					"Category": "Video"
				},
				{
					"API": "Breaking Bad Quotes",
					"Description": "Some Breaking Bad quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/shevabam/breaking-bad-quotes",
					"Category": "Video"
				},
				{
					"API": "Catalogopolis",
					"Description": "Doctor Who API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.catalogopolis.xyz/docs/",
					"Category": "Video"
				},
				{
					"API": "Catch The Show",
					"Description": "REST API for next-episode.net",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://catchtheshow.herokuapp.com/api/documentation",
					"Category": "Video"
				},
				{
					"API": "Czech Television",
					"Description": "TV programme of Czech TV",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.ceskatelevize.cz/xml/tv-program/",
					"Category": "Video"
				},
				{
					"API": "Dailymotion",
					"Description": "Dailymotion Developer API",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.dailymotion.com/",
					"Category": "Video"
				},
				{
					"API": "Dune",
					"Description": "A simple API which provides you with book, character, movie and quotes JSON data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/ywalia01/dune-api",
					"Category": "Video"
				},
				{
					"API": "Final Space",
					"Description": "Final Space API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://finalspaceapi.com/docs/",
					"Category": "Video"
				},
				{
					"API": "Game of Thrones Quotes",
					"Description": "Some Game of Thrones quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://gameofthronesquotes.xyz/",
					"Category": "Video"
				},
				{
					"API": "Harry Potter Charactes",
					"Description": "Harry Potter Characters Data with with imagery",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://hp-api.herokuapp.com/",
					"Category": "Video"
				},
				{
					"API": "IMDb-API",
					"Description": "API for receiving movie, serial and cast information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://imdb-api.com/",
					"Category": "Video"
				},
				{
					"API": "IMDbOT",
					"Description": "Unofficial IMDb Movie / Series Information",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/SpEcHiDe/IMDbOT",
					"Category": "Video"
				},
				{
					"API": "JSON2Video",
					"Description": "Create and edit videos programmatically: watermarks,resizing,slideshows,voice-over,text animations",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://json2video.com",
					"Category": "Video"
				},
				{
					"API": "Lucifer Quotes",
					"Description": "Returns Lucifer quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/shadowoff09/lucifer-quotes",
					"Category": "Video"
				},
				{
					"API": "MCU Countdown",
					"Description": "A Countdown to the next MCU Film",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/DiljotSG/MCU-Countdown",
					"Category": "Video"
				},
				{
					"API": "Motivational Quotes",
					"Description": "Random Motivational Quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://nodejs-quoteapp.herokuapp.com/",
					"Category": "Video"
				},
				{
					"API": "Movie Quote",
					"Description": "Random Movie and Series Quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/F4R4N/movie-quote/",
					"Category": "Video"
				},
				{
					"API": "Open Movie Database",
					"Description": "Movie information",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "http://www.omdbapi.com/",
					"Category": "Video"
				},
				{
					"API": "Owen Wilson Wow",
					"Description": "API for actor Owen Wilson's \"wow\" exclamations in movies",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://owen-wilson-wow-api.herokuapp.com",
					"Category": "Video"
				},
				{
					"API": "Ron Swanson Quotes",
					"Description": "Television",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/jamesseanwright/ron-swanson-quotes#ron-swanson-quotes-api",
					"Category": "Video"
				},
				{
					"API": "Simkl",
					"Description": "Movie, TV and Anime data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://simkl.docs.apiary.io",
					"Category": "Video"
				},
				{
					"API": "STAPI",
					"Description": "Information on all things Star Trek",
					"Auth": "",
					"HTTPS": false,
					"Cors": "no",
					"Link": "http://stapi.co",
					"Category": "Video"
				},
				{
					"API": "Stranger Things Quotes",
					"Description": "Returns Stranger Things quotes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://github.com/shadowoff09/strangerthings-quotes",
					"Category": "Video"
				},
				{
					"API": "Stream",
					"Description": "Czech internet television, films, series and online videos for free",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://api.stream.cz/graphiql",
					"Category": "Video"
				},
				{
					"API": "Stromberg Quotes",
					"Description": "Returns Stromberg quotes and more",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.stromberg-api.de/",
					"Category": "Video"
				},
				{
					"API": "SWAPI",
					"Description": "All the Star Wars data you've ever wanted",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://swapi.dev/",
					"Category": "Video"
				},
				{
					"API": "SWAPI",
					"Description": "All things Star Wars",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.swapi.tech",
					"Category": "Video"
				},
				{
					"API": "SWAPI GraphQL",
					"Description": "Star Wars GraphQL API",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://graphql.org/swapi-graphql",
					"Category": "Video"
				},
				{
					"API": "The Lord of the Rings",
					"Description": "The Lord of the Rings API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://the-one-api.dev/",
					"Category": "Video"
				},
				{
					"API": "The Vampire Diaries",
					"Description": "TV Show Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://vampire-diaries-api.netlify.app/",
					"Category": "Video"
				},
				{
					"API": "ThronesApi",
					"Description": "Game Of Thrones Characters Data with imagery",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://thronesapi.com/",
					"Category": "Video"
				},
				{
					"API": "TMDb",
					"Description": "Community-based movie data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.themoviedb.org/documentation/api",
					"Category": "Video"
				},
				{
					"API": "TrailerAddict",
					"Description": "Easily embed trailers from TrailerAddict",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://www.traileraddict.com/trailerapi",
					"Category": "Video"
				},
				{
					"API": "Trakt",
					"Description": "Movie and TV Data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://trakt.docs.apiary.io/",
					"Category": "Video"
				},
				{
					"API": "TVDB",
					"Description": "Television data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://thetvdb.com/api-information",
					"Category": "Video"
				},
				{
					"API": "TVMaze",
					"Description": "TV Show Data",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.tvmaze.com/api",
					"Category": "Video"
				},
				{
					"API": "uNoGS",
					"Description": "Unofficial Netflix Online Global Search, Search all netflix regions in one place",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://rapidapi.com/unogs/api/unogsng",
					"Category": "Video"
				},
				{
					"API": "Vimeo",
					"Description": "Vimeo Developer API",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.vimeo.com/",
					"Category": "Video"
				},
				{
					"API": "Watchmode",
					"Description": "API for finding out the streaming availability of movies & shows",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.watchmode.com/",
					"Category": "Video"
				},
				{
					"API": "Web Series Quotes Generator",
					"Description": "API generates various Web Series Quote Images",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://github.com/yogeshwaran01/web-series-quotes",
					"Category": "Video"
				},
				{
					"API": "YouTube",
					"Description": "Add YouTube functionality to your sites and apps",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developers.google.com/youtube/",
					"Category": "Video"
				},
				{
					"API": "7Timer!",
					"Description": "Weather, especially for Astroweather",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://www.7timer.info/doc.php?lang=en",
					"Category": "Weather"
				},
				{
					"API": "AccuWeather",
					"Description": "Weather and forecast data",
					"Auth": "apiKey",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "https://developer.accuweather.com/apis",
					"Category": "Weather"
				},
				{
					"API": "Aemet",
					"Description": "Weather and forecast data from Spain",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opendata.aemet.es/centrodedescargas/inicio",
					"Category": "Weather"
				},
				{
					"API": "apilayer weatherstack",
					"Description": "Real-Time & Historical World Weather Data API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://weatherstack.com/",
					"Category": "Weather"
				},
				{
					"API": "APIXU",
					"Description": "Weather",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.apixu.com/doc/request.aspx",
					"Category": "Weather"
				},
				{
					"API": "AQICN",
					"Description": "Air Quality Index Data for over 1000 cities",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://aqicn.org/api/",
					"Category": "Weather"
				},
				{
					"API": "AviationWeather",
					"Description": "NOAA aviation weather forecasts and observations",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.aviationweather.gov/dataserver",
					"Category": "Weather"
				},
				{
					"API": "ColorfulClouds",
					"Description": "Weather",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://open.caiyunapp.com/ColorfulClouds_Weather_API",
					"Category": "Weather"
				},
				{
					"API": "Euskalmet",
					"Description": "Meteorological data of the Basque Country",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://opendata.euskadi.eus/api-euskalmet/-/api-de-euskalmet/",
					"Category": "Weather"
				},
				{
					"API": "Foreca",
					"Description": "Weather",
					"Auth": "OAuth",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://developer.foreca.com",
					"Category": "Weather"
				},
				{
					"API": "HG Weather",
					"Description": "Provides weather forecast data for cities in Brazil",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://hgbrasil.com/status/weather",
					"Category": "Weather"
				},
				{
					"API": "Hong Kong Obervatory",
					"Description": "Provide weather information, earthquake information, and climate data",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.hko.gov.hk/en/abouthko/opendata_intro.htm",
					"Category": "Weather"
				},
				{
					"API": "MetaWeather",
					"Description": "Weather",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://www.metaweather.com/api/",
					"Category": "Weather"
				},
				{
					"API": "Meteorologisk Institutt",
					"Description": "Weather and climate data",
					"Auth": "User-Agent",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://api.met.no/weatherapi/documentation",
					"Category": "Weather"
				},
				{
					"API": "Micro Weather",
					"Description": "Real time weather forecasts and historic data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://m3o.com/weather/api",
					"Category": "Weather"
				},
				{
					"API": "ODWeather",
					"Description": "Weather and weather webcams",
					"Auth": "",
					"HTTPS": false,
					"Cors": "unknown",
					"Link": "http://api.oceandrivers.com/static/docs.html",
					"Category": "Weather"
				},
				{
					"API": "Oikolab",
					"Description": "70+ years of global, hourly historical and forecast weather data from NOAA and ECMWF",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://docs.oikolab.com",
					"Category": "Weather"
				},
				{
					"API": "Open-Meteo",
					"Description": "Global weather forecast API for non-commercial use",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://open-meteo.com/",
					"Category": "Weather"
				},
				{
					"API": "openSenseMap",
					"Description": "Data from Personal Weather Stations called senseBoxes",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://api.opensensemap.org/",
					"Category": "Weather"
				},
				{
					"API": "OpenUV",
					"Description": "Real-time UV Index Forecast",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.openuv.io",
					"Category": "Weather"
				},
				{
					"API": "OpenWeatherMap",
					"Description": "Weather",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://openweathermap.org/api",
					"Category": "Weather"
				},
				{
					"API": "QWeather",
					"Description": "Location-based weather data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://dev.qweather.com/en/",
					"Category": "Weather"
				},
				{
					"API": "RainViewer",
					"Description": "Radar data collected from different websites across the Internet",
					"Auth": "",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.rainviewer.com/api.html",
					"Category": "Weather"
				},
				{
					"API": "Storm Glass",
					"Description": "Global marine weather from multiple sources",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://stormglass.io/",
					"Category": "Weather"
				},
				{
					"API": "Tomorrow",
					"Description": "Weather API Powered by Proprietary Technology",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://docs.tomorrow.io",
					"Category": "Weather"
				},
				{
					"API": "US Weather",
					"Description": "US National Weather Service",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.weather.gov/documentation/services-web-api",
					"Category": "Weather"
				},
				{
					"API": "Visual Crossing",
					"Description": "Global historical and weather forecast data",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.visualcrossing.com/weather-api",
					"Category": "Weather"
				},
				{
					"API": "weather-api",
					"Description": "A RESTful free API to check the weather",
					"Auth": "",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://github.com/robertoduessmann/weather-api",
					"Category": "Weather"
				},
				{
					"API": "WeatherAPI",
					"Description": "Weather API with other stuff like Astronomy and Geolocation API",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.weatherapi.com/",
					"Category": "Weather"
				},
				{
					"API": "Weatherbit",
					"Description": "Weather",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "unknown",
					"Link": "https://www.weatherbit.io/api",
					"Category": "Weather"
				},
				{
					"API": "Yandex.Weather",
					"Description": "Assesses weather condition in specific locations",
					"Auth": "apiKey",
					"HTTPS": true,
					"Cors": "no",
					"Link": "https://yandex.com/dev/weather/",
					"Category": "Weather"
				}
			]
		}
	})
}

/**
 * Fetch API by the name from the public api
 * @param {string} name 
 * @returns {Promise<Array<Object>, Error>}
 */
const apiSearchServiceWithName = async title => {
	console.log("Mock Api Search by title");
	return Promise.resolve({
		data:{
			entries: [
				{
					"API": "FishWatch",
					"Description": "Information and pictures about individual fish species",
					"Auth": "",
					"HTTPS": true,
					"Cors": "yes",
					"Link": "https://www.fishwatch.gov/developers",
					"Category": "Animals"
				}
			]
		}
	})
}

module.exports = {
	apiSearchService,
	apiSearchServiceWithName
}