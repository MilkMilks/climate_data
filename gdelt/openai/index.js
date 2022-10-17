import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

String.prototype.replaceArray = function(find) {
	var replaceString = this;
	for (var i = 0; i < find.length; i++) {
	  replaceString = replaceString.replace(find[i], "");
	}
	return replaceString;
  };

let all_unicode_whitespaces = [
  "\n",
  "\r",
  "\\u201a",
  "\\u201b",
  "\\u201c",
  "\\u201d",
  "\u0009",
  "\u000A",
  "\u000B",
  "\u000C",
  "\u000D",
  "\u0020",
  "\u0085",
  "\u00A0",
  "\u1680",
  "\u2000",
  "\u2001",
  "\u2002",
  "\u2003",
  "\u2004",
  "\u2005",
  "\u2006",
  "\u2007",
  "\u2008",
  "\u2009",
  "\u200A",
  "\u2028",
  "\u2029",
  "\u202F",
  "\u205F",
  "\u3000",
];
let input =
  "If the article indicates a climate-change/environmental protest, return a table summarizing the date, location, number of protestors in attendance, and the reason for the protest: SUBSCRIBE Invalid email We use your sign-up to provide content in ways you've consented to and to improve our understanding of you. This may include adverts from us and 3rd parties based on our understanding. You can unsubscribe at any time. More info  The post by @KimberleyJC4PM - meaning Jeremy Corbyn for Prime Minister - sees the Twitter user take aim at the outspoken Good Morning Britain host, adding that his behaviour toward the 16-year-old  cannot go unpunished . It reads:  I ve written to both ITV and GMB to make a formal complain5 (sic) regarding @piersmorgan and his mocking impersonation of @gretathunberg yesterday morning.  This disgraceful behaviour cannot go unpunished.   She then added a screenshot of her complaint, although the tweet has since been deleted. On her Twitter page, which is filled with her admiration for Labour leader Mr Corbyn, she posted:  Based on the fact I ve had more hatred than I can keep up with since Piers RT d my post (a mere few minutes ago), I ve chosen to delete it.  I really didn t expect anyone to notice my post, but I do hope Piers does apologise as after all she is just a child.  She added the hashtag #SpreadLoveNotHate.  Piers Morgan has slapped down a left-wing Jeremy Corbyn supporter  The post was by @KimberleyJC4PM - meaning Jeremy Corbyn for Prime Minister  While Piers, who shared the post, hit back with a simple  How DARE you!  response, followers of @KimberleyJC4PM were quick to rush to her defence. One said:  Following so we can help if it happens again. Solidarity.  Another, called @JC4PM, said:  Sorry you ve been attacked. It s best to ignore media celebrities, they re nasty bullies and this is all being done to distract us from the main important things.  Another said:  So Greta Thurnberg (sic) and Jeremy Corbyn the 2 biggest threats to the world order right now - wouldn t it be nice if people could be left to make up their own minds about the reality without the character assassinations.  READ NOW: Kit Malthouse launches extraordinary attack on Extinction Rebellion  The spat comes after Piers clashed with an Extinction Rebellion founder who refused to practice what she preached when the host called her out over her own carbon footprint, which included riding a chauffeur-driven car to the studio this morning. Piers and Susanna they were joined by Skeena Rathor, a Labour district councillor and member of Extinction Rebellion as well as former Metropolitan police Chief Mike Neville in the studio. Piers was keen to ascertain whether or not Ms Rathor  practiced what she preached  and if protestors should focus on reducing their own carbon footprint in order to make a bigger impact, instead of blocking streets, causing widespread disruption and taking up police resources. But it quickly became apparent to those watching at home how Ms Rathor had made a u-turn in regards to her own opinion and Piers was quick to brand her a  hypocrite . DON'T MISS: Piers Morgan rages at Extinction Rebellion founder Selfish climate change protestors ruin war heroes  reunion Extinction Rebellion rakes in  340k A DAY in donations during protests  The row came after his criticism of teenage eco warrior Greta Thunberg  After showing the guests a series of videos and images of protestors dancing in the street, and queuing up to order food in McDonalds, Piers remarked:  I don t hear any protests.  Ms Rathor argued how there were over 600 arrests within the first two days of the event, despite claiming it to be a  mass peaceful non-violent protest .  Why are you [protestors] wasting police resources? Why provoke the Metropolitan police who are already under so much pressure?  Susanna asked.  The government are not listening,  Ms Rathor said.  The public need to be told the truth. We want to disrupt business as usual.   Piers hit back with a simple  How DARE you!   Piers then turned to Ms Rathor and said:  How did you get here this morning?   Your [GMB] car picked me up,  she commented and then he turned his attention to finding out whether she engaged in as many eco-friendly practices as she encouraged others to do.  Ok, in a car. Have you got a TV at home?  Piers continued and Ns Rathor asked:  Can you tell me the point you re trying to make Piers?   Answer my question! Do you have a TV at home?  The presenter said, but Ms Rathor diverted:  Again Piers we re not talking about the real issue. I don t think that s relevant.   The spat comes after Piers clashed with an Extinction Rebellion founder  Trending | date | location | number of protestors | reason for protest |";
// input = input.replaceArray(all_unicode_whitespaces)

// input = input.replace(/[^\w\s!?]/g,'')
// //remove all non-alphanumeric characters
// input = input.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '')

// console.log(input)

const response = await openai.createCompletion({
  model: "text-curie-001",
  prompt: input,
  temperature: 0,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(response.data);
