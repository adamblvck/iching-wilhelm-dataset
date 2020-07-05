# iching-wilhelm-dataset

Hey, in this repo you'll find a JSON/CSV containing the Wilhelm Translation of the I-Ching (~400 kB size). The [I-Ching](https://en.wikipedia.org/wiki/I_Ching) is one of the most fascinating, mystical text alongside other Sacred Texts, whose most popular English translation, published in 1950, has entered the public domain in 2020. This I-Ching translation has been made available in JSON/CSV for easy use in websites, servers, apps, or perhaps NLP/Data Science endevours.

The json-file ([click here for download](./data/iching_wilhelm_translation.json)) contains 64 objects, each corresponding to the 64 Hexagrams. There's also a (csv-file available here)[./data/iching_wilhelm_translation.csv] with the same data. A full markdown version of the translation can be [found here](./data/iching_willhelm_markdown.md).

The hexagram objects in the `JSON` contain all sorts of goodies, including the binary notation of the hexagram, it's traditional symbolism, but also the wilhem translations of the hexagram.

The wilhem translations are stored as 6 keys:

- `wilhelm_above`: keywords for the upper trigram of the hexagram.
- `wilhelm_below`: keywords for the lower trigram of the hexagram.
- `wilhelm_symbolic`: English symbolic explanation of the hexagram (albeit sometimes wtf... for real)
- `wilhelm_judgment`: The "Law", if the Hexagram would be judging you, or the world, this would be the text that represents it. Contains `text` and `comments` part. The `text` part contains the traditional poen-like description, the `comments` contain Wilhelm's comments on this text.
- `wilhelm_image`: The "Image". If the Hexagram would be visualized, this would the text to describe it. Same as judgment, contains `text` with poem-like decription, and a `comments` part where Wilhelm gives his 2 cent on the matter.
- `wilhelm_lines`: Here we find the interpretation of the changing lines. Say you throw hexagram 26, and the changing line is 1, then under `1` you'll be finding what it means if this hexagram is *changing through line 1*. Here too, we have a traditional half-cryptic `text` and Wilhelm's `comments`.

~~~
{
	"1": {
		"hex": 1,
		"hex_font": "䷀",
		"trad_chinese": "乾",
		"pinyin": "qián",
		"english": "Initiating",
		"binary": 111111,
		"od": "02",
		"wilhelm_above": {
			"chinese": "CH'IEN",
			"symbolic": "THE CREATIVE,",
			"alchemical": "HEAVEN"
		},
		"wilhelm_below": {
			"chinese": "CH'IEN",
			"symbolic": "THE CREATIVE,",
			"alchemical": "HEAVEN"
		},
		"wilhelm_symbolic": "The first hexagram is made up of six unbroken lines. These unbroken lines stand for the primal power, which is light-giving, active, strong, and of the spirit. The hexagram is consistently strong in character, and since it is without weakness, its essence is power or energy. Its image is heaven. Its energy is represented as unrestricted by any fixed conditions in space and is therefore conceived of as motion. Time is regarded as the basis of this motion. Thus the hexagram includes also the power of time and the power of persisting in time, that is, duration. The power represented by the hexagram is to be interpreted in a dual sense in terms of its action on the universe and of its action on the world of men. In relation to the universe, the hexagram expresses the strong, creative action of the Deity. In relation to the human world, it denotes the creative action of the holy man or sage, of the ruler or leader of men, who through his power awakens and develops their higher nature.",
		"wilhelm_judgment": {
			"text": "THE CREATIVE works sublime success, Furthering through perseverance.",
			"comments": "According to the original meaning, the attributes [sublimity, potentiality of success, power to further, perseverance] are paired. When an individual draws this oracle, it means that success will come to him from the primal depths of the universe and that everything depends upon his seeking his happiness and that of others in one way only, that is, by perseverance in what is right. The specific meanings of the four attributes became the subject of speculation at an early date. The Chinese word here rendered by \"sublime\" means literally \"head,\" \"origin,\" \"great.\" This is why Confucius says in explaining it: \"Great indeed is the generating power of the Creative; all beings owe their beginning to it. This power permeates all heaven.\" For this attribute inheres in the other three as well. The beginning of all things lies still in the beyond in the form of ideas that have yet to become real. But the Creative furthermore has power to lend form to these archetypes of ideas. This is indicated in the word success, and the process is represented by an image from nature: \"The clouds pass and the rain does its work, and all individual beings flow into their forms.\" Applies to the human world, these attributes show the great man the way to notable success: \"Because he sees with great clarity and cause and effects, he completes the six steps at the right time and mounts toward heaven on them at the right time, as though on six dragons.\" The six steps are the six different positions given in the hexagram, which are represented later by the dragon symbol. Here it is shown that the way to success lies in apprehending and giving actuality to the way of the universe [Tao], which, as a law running through end and beginning, brings about all phenomena in time. Thus each step attained forthwith becomes a preparation for the next. Time is no longer a hindrance but the means of making actual what is potential. The act of creation having found expression in the two attributes sublimity and success, the work of conservation is shown to be a continuous actualization and differentiation of form. This is expressed in the two terms \"furthering\" (literally, \"creating that which accords with the nature of a given being\") and \"persevering\" (literally, \"correct and firm\"). \"The course of the Creative alters and shapes beings until each attains its true, specific nature, then it keeps them in conformity with the Great Harmony. Thus does it show itself to further through perseverance.\" In relation to the human sphere, this shows how the great man brings peace and security to the world through his activity in creating order: \"He towers high above the multitude of beings, and all lands are united in peace.\" Another line of speculation goes still further in separating the words \"sublime,\" \"success,\" \"furthering,\" \"perseverance,\" and parallels them with the four cardinal virtues in humanity. To sublimity, which, as the fundamental principle, embraces all the other attributes, it links love. To the attribute success are linked the morals, which regulate and organize expressions of love and thereby make them successful. The attribute furthering is correlated with justice, which creates the conditions in which each receives that which accords with his being, that which is due him and which constitutes his happiness. The attribute perseverance is correlated with wisdom, which discerns the immutable laws of all that happens and can therefore bring about enduring conditions. These speculations, already broached in the commentary called Wên Yen , later formed the bridge connecting the philosophy of the \"five stages (elements) of change,\" as laid down in the Book of History (Shu Ching) with the philosophy of the Book of Changes, which is based solely on the polarity of positive and negative principles. In the course of time this combination of the two systems of thought opened the way for an increasingly intricate number symbolism."
		},
		"wilhelm_image": {
			"text": "The movement of heaven is full of power.\nThus the superior man makes himself strong and\nuntiring.",
			"comments": "Since there is only one heaven, the doubling of the trigram Ch'ien, of which heaven is the image, indicates the movement of heaven. One complete revolution of heaven makes a day, and the repetition of the trigram means that each day is followed by another. This creates the idea of time. Since it is the same heaven moving with untiring power, there is also created the idea of duration both in and beyond time, a movement that never stops nor slackens, just as one day follows another in an unending course. This duration in time is the image of the power inherent in the Creative. With this image as a model, the sage learns how best to develop himself so that his influence may endure. He must make himself strong in every way, by consciously casting out all that is inferior and degrading. Thus he attains that tirelessness which depends upon consciously limiting the fields of his activity."
		},
		"wilhelm_lines": {
			"1": {
				"text": "Hidden dragon. Do not act.",
				"comments": "In China the dragon has a meaning altogether different from that given it in the Western world. The dragon is a symbol of the electrically charged, dynamic, arousing force that manifests itself in the thunderstorm. In winter this energy withdraws into the earth; in the early summer it becomes active again, appearing in the sky as thunder and lightning. As a result the creative forces on earth begin to stir again. Here this creative force is still hidden beneath the earth and therefore has no effect. In terms of human affairs, this symbolizes a great man who is still unrecognized. Nonetheless he remains true to himself. He does not allow himself to be influenced by outward success or failure, but confident in his strength, he bides his time. Hence it is wise for the man who consults the oracle and draws this line to wait in the calm strength of patience. The time will fulfill itself. One need not fear least strong will should not prevail; the main thing is not to expend one's powers prematurely in an attempt to obtain by force something for which the time is not yet ripe."
			},
			"2": {
				"text": "Dragon appearing in the field.\nIt furthers one to see the great man.",
				"comments": "Here the effects of the light-giving power begin to manifest themselves. In terms of human affairs, this means that the great man makes his appearance in his chosen field of activity. As yet he has no commanding position but is still with his peers. However, what distinguishes him form the others is his seriousness of purpose, his unqualified reliability, and the influence he exerts on his environment with out conscious effort. Such a man is destined to gain great influence and to set the world in order. Therefore it is favorable to see him."
			},
			"3": {
				"text": "All day long the superior man is creatively active.\nAt nightfall his mind is still beset with cares.\nDanger. No blame.",
				"comments": "A sphere of influence opens up for the great man. His fame begins to spread. The masses flock to him. His inner power is adequate to the increased outer activity. There are all sorts of things to be done, and when others are at rest in the evening, plans and anxieties press in upon him. But danger lurks here at the place of transition from lowliness to the heights. Many a great man has been ruined because the masses flocked to him and swept him into their course. Ambition has destroyed his integrity. However, true greatness is not impaired by temptations. He who remains in touch with the time that is dawning, and with its demands is prudent enough to avoid all pitfalls, and remains blameless."
			},
			"4": {
				"text": "Wavering flight over the depths.\nNo blame.",
				"comments": "A place of transition has been reached, and free choice can enter in. A twofold possibility is presented to the great man: he can soar to the heights and play an important part in the world, or he can withdraw into solitude and develop himself. He can go the way of the hero or that of the holy sage who seeks seclusion. There is no general law of his being. If the individual acts consistently and is true to himself, he will find the way that is appropriate for him. This way is right for him and without blame."
			},
			"5": {
				"text": "Flying dragon in the heavens.\nIt furthers one to see the great man.",
				"comments": "Here the great man has attained the sphere of the heavenly beings. His influence spreads and becomes visible throughout the whole world. Everyone who sees him may count himself blessed. Confucius says about this line:\n\nThings that accord in tone vibrate together. Things that have affinity in their inmost natures seek one another. Water flows to what is wet, fire turns to what is dry. Clouds (the breath of heaven) follow the dragon, wind (the breath of earth) follows the tiger. Thus the sage arises, and all creatures follow him with their eyes. What is born of heaven feels related to what is above. What is born of earth feels related to what is below. Each follows its kind."
			},
			"6": {
				"text": "Arrogant dragon will have cause to repent.",
				"comments": "When a man seeks to climb so high that he loses touch with the rest of mankind, he becomes isolated, and this necessarily leads to failure. This line warns against titanic aspirations that exceed one's power. A precipitous fall would follow.\nWhen all the lines are nines, it means:\n\nThere appears a flight of dragons without heads.\nGood fortune."
			}
		}
	},
	1: {
		...
	}
}
~~~


## License & Usage

The I-Ching Wilhelm Translation is in public domain as of 2020, making this text freely available to all.

If you want to use `iching_willhelm_translation.json`, please do so at your own risk, and take a peak at the MIT license.

## Credits

Markdown version of Wilhelm translation forked from https://github.com/harrywang/iching by author @harrywang.

*Adam Blvck*

