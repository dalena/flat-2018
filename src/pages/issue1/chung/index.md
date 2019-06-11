---
title: "Decision-Making, Delegated, Art-Making: AI and Art, A.D. 2019"
date: 2019-06-13T17:12:33.962Z
path: "/flat/chung"
image: "feature.jpg"
description: "A short story"
author: "A. Mira Chung"

img1: "artwork/artExample1.png"
img1txt: "Title of art by Example"

img2: "artwork/artExample1.png"
img2txt: "Title of art by Example"

img3: "artwork/artExample1.png"
img3txt: "Title of art by Example"

img4: "artwork/artExample1.png"
img4txt: "Title of art by Example"

img5: "artwork/artExample1.png"
img5txt: "Title of art by Example"

img6: "artwork/artExample1.png"
img6txt: "Title of art by Example"
---

##Freeware and $432,500 

It was 2017 when 17-years-old Robbie Barrat was experimenting with a then newly available neural network framework called generative adversarial network (GAN) in his bedroom in rural America. While working on his own projects, Barrat made his software ("fun tools" as he called it) available online for free public use. This small act later became a part of a controversy in the Art World when it was discovered that "the first AI artwork" was sold at Christie's auction for $432,500 using Barrat's open source code without proper credit or compensation.

The artwork in the spotlight is Portrait of Edmond de Belamy (2018), a framed digital print from a family of portraits generated with a GAN software. The portrait presents a digitally reconstructed, glitchy figure that spares the viewer a set of minimally recognizable features: European, Caucasian, 17-19th century, affluent, male, gold framed, and oil painting. Its conceptual argument disclosed to the public were all at best hazy, even it was credited to an artist collective known as Obvious. However, the institutional validation established through this exchange was far clearer than what an average professional artist could afford in their lifetime. Over and above, the association with the $432,500 price tag and the headline "minimal human labor" alone was already sensational but safe enough for it to slip into a cocktail party or Now Trending on Twitter. The situation further escalated when Barrat tweeted a side-to-side comparison of the sold artwork with his old GAN project, Portrait GAN. 

##Counterfeit Money 

Amidst the controversy, there was a presence of a mysterious "AI system", a generative adversarial network (GAN) who allegedly created the artwork. Invented by an American computer scientist Ian Goodfellow in 2014, GAN is a recent addition to the deep learning frameworks. The framework is well known for producing systems with drastic improvement in image generation tasks, presenting images with higher resolution, "more natural" looking outputs with more defined edges . 3 
The merit of GAN comes from its novel "adversarial" architecture distinctive from other ML generative models. Goodfellow uses the analogy of counterfeit money to explain the concept of adversary learning: The basic idea of GANs is to set up a game between two players. One of them is called  the generator. The generator creates samples that are intended to come from the same distribution as the training data. The other player is the discriminator. The discriminator examines samples to determine whether they are real or fake. [...] The generator is trained to fool the discriminator. We can think of the generator as being like a counterfeiter, trying to make fake money, and the discriminator as being like police, trying to allow legitimate money and catch counterfeit money. To succeed in this game, the counterfeiter must learn to make money that is indistinguishable from genuine money, and the generator network must learn to create samples that are drawn from the same distribution as the training data.

For a typical case of image generation, the generator starts out with random variables (= a noise field) and learns to estimate a function that that maps the given random variables to correct distribution of visual features. The discriminator,only knowing that a certain fraction of the images presented to it will 
