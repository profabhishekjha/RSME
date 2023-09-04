/* eslint-disable @next/next/no-img-element */
"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Footer from "../../(layout)/Footer";
import Herocard from "../../components/Herocard";
import { ContextAccess } from "../../components/ContextAccess";

const page = () => {
  const { isHindi } = ContextAccess();
  return (
    <div>
      <div className="flex flex-col gap-16">
        <div className="flex justify-center items-center ">
          <img
            className="h-[80vh] w-full object-cover "
            src="/bacche.jpg"
            alt="VHL GROUP"
          />
        </div>
        <div className="flex justify-center items-center relative ">
          <img
            className="h-9 z-9 left-[2%] -top-[16%] absolute"
            src="/icons/quotes-left.svg"
            alt="VHL"
          />
          <p className="text-[1.2rem] w-[90%] text-center">
            {!isHindi
              ? `Welcome to Raghunath Singh Medical and Educational a beacon of hope, a catalyst for change, and a testament to the power of collective compassion. At RSME, we believe that true progress is measured not just in economic terms. Our journey is one of dedication, empathy, and unwavering commitment to creating a world where every individual has the opportunity to thrive, regardless of their circumstances.`
              : `रघुनाथ सिंह मेडिकल एंड एजुकेशनल फाउंडेशन में आपका स्वागत है, जो आशा की एक प्रकाशक, परिवर्तन के एक कारक, और सामूहिक सहानुभूति की शक्ति का साक्षात्कार है। आरएसएमई में, हम मानते हैं कि वास्तविक प्रगति को आर्थिक परिप्रेक्ष्य में ही नहीं मापा जा सकता। हमारा सफर समर्पण, सहानुभूति, और परिस्थितियों के बावजूद हर व्यक्ति को संघर्ष के अवसर की संभावना हो, इस पर दृढ़ समर्पण से भरा हुआ है।`}
          </p>
        </div>
        <div className="flex justify-center items-center relative ">
          <p className="text-[1.2rem] w-[90%] text-center">
            {!isHindi
              ? `Founded with a vision to make a meaningful difference, RSME stands as a remarkable NGO foundation, revered for its multifaceted and impactful initiatives. Our areas of focus span across critical sectors, including`
              : `एक मानवता की भावना के साथ स्थापित, आरएसएमई एक उल्लेखनीय गैरसरकारी संगठन की भूमिका में खड़ा है, जिसे उसके बहुप्रतिक्षिप्त और प्रभावी पहलुओं के लिए सम्मानित किया गया है। हमारे प्राथमिक क्षेत्र बहुत विभिन्न हैं, जिनमें शामिल हैं:
              `}
            <span className="font-semibold bg-yellow-200">
              {!isHindi
                ? ` medical aid, student education, and comprehensive training programs`
                : `चिकित्सा सहायता, छात्र शिक्षा, और व्यापक प्रशिक्षण कार्यक्रम।`}
            </span>
            {!isHindi
              ? ` . Through these pillars, we have woven a tapestry of change that touches lives at their core. In the realm of medical aid, we extend a helping hand to those who need it most. Our medical assistance initiatives are not just about treating ailments; they're about restoring dignity and providing a ray of hope to those facing health challenges for the betterment of their life.`
              : ` इन स्तंभों के माध्यम से, हमने एक परिवर्तन का वस्त्र बुन दिया है जो जीवनों को उनके मूल में छूता है। चिकित्सा सहायता के क्षेत्र में, हम उनकी मदद के लिए एक सहायक हाथ बढ़ाते हैं जिन्हें यह सबसे ज्यादा आवश्यकता होती है। हमारी चिकित्सा सहायता पहलों का मतलब बीमारियों का इलाज करने के बारे में नहीं है; यह उनके जीवन के सुधार के लिए स्वाभिमान की पुनर्स्थापना करने और उन लोगों के लिए एक किरण उम्मीद प्रदान करने के बारे में है जो स्वास्थ्य संबंधी चुनौतियों का सामना कर रहे हैं।`}
          </p>
          <img
            className="h-9 z-1 right-[8%] -bottom-3 absolute"
            src="/icons/quotes-right.svg"
            alt="VHL"
          />
        </div>
        <br />
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex  py-10  bg-[#efe3ce8a] justify-center items-center">
          <img
            className="h-[70vh]  w-[95vw] object-cover "
            src="/images/ImgCarousel/hifi-child.jpg"
            alt="VHL GROUP"
          />
        </div>
        <div className="flex justify-center items-center relative ">
          <img
            className="h-9 z-9 left-[2%] -top-[16%] absolute"
            src="/icons/quotes-left.svg"
            alt="VHL"
          />
          <p className="text-[1.2rem] w-[90%] text-center">
            {!isHindi
              ? ` Whether it's providing essential medications, organizing health camps, or facilitating medical procedures, we stand by our commitment to healing lives and easing burdens. Education is the cornerstone of progress, and at RSME, we are dedicated to ensuring that every child's potential is nurtured and unlocked. We work tirelessly to provide access to quality education, learning resources, and mentorship, empowering students to envision a brighter future and equipping them with the tools to realize their dreams.`
              : ` चाहे वह आवश्यक दवाओं की प्रदान करना हो, स्वास्थ्य शिविरों का आयोजन करना हो, या चिकित्सा प्रक्रियाओं की सुविधा प्रदान करना हो, हम अपने संकल्प के साथ खड़े हैं कि जीवनों की चिकित्सा करके और बोझ को कम करके सहायता करें। शिक्षा प्रगति का मूल आधार है, और आरएसएमई में, हम समर्पित हैं कि प्रत्येक बच्चे की संभावना को पोषित और खोला जाए। हम अथक प्रयास करते हैं कि गुणवत्ता वाली शिक्षा, सीखने के संसाधन, और मेंटरशिप तक पहुंच प्रदान करें, छात्रों को एक उज्ज्वल भविष्य की कल्पना करने और उनके सपने को पूरा करने के उपकरणों से सशक्त करने के साधनों से लैस करें।`}
          </p>
        </div>
        <div className="flex justify-center items-center relative ">
          <p className="text-[1.2rem] w-[90%] text-center">
            {!isHindi
              ? `But our impact doesn't stop there. We recognize that true empowerment encompasses holistic growth. Through our diverse training initiatives, we empower individuals with essential skills that open doors to opportunities they might not have thought possible. From vocational training that enhances employability to life skills that foster personal development, our training programs create pathways to self-sufficiency and success. At the heart of RSME lies an unyielding dedication to fostering positive change.`
              : `लेकिन हमारा प्रभाव वहीं नहीं रुकता। हम मानते हैं कि वास्तविक सशक्तिकरण पूर्णिमा से समृद्धि का सामाग्री है। हमारे विविध प्रशिक्षण पहलुओं के माध्यम से, हम व्यक्तियों को महत्वपूर्ण कौशलों से सशक्त करते हैं जो उनके लिए असंभाव सोचे गए अवसरों के द्वार खोलते हैं। रोजगारी की वृद्धि को बढ़ाने वाले व्यावसायिक प्रशिक्षण से लेकर व्यक्तिगत विकास को बढ़ावा देने वाले जीवन कौशलों तक, हमारे प्रशिक्षण कार्यक्रम स्वावलंबन और सफलता की मार्गप्रदर्शन बनाते हैं। आरएसएमई के मूल में सकारात्मक परिवर्तन को पोषण देने के लिए अतल समर्पण है।`}
          </p>
        </div>
      </div>

      {/* not updated */}

      <div className="flex items-center justify-center mt-28 mb-20 ">
        <p className="text-[1.2rem] text-center font-bold w-[75vw]">
          {!isHindi
            ? `Join us in our mission to sow the seeds of change, nurture them with compassion, and watch as they grow into a future brimming with promise. Welcome to Raghunath Singh Medical and Educational– where every action, no matter how small, is a step towards a brighter tomorrow.`
            : `हमारे मिशन में शामिल हों और परिवर्तन के बीज बोने का काम करें, उन्हें दया से पोषित करें, और देखें कि वे एक वादे से भरपूर भविष्य में बदल जाते हैं। रघुनाथ सिंह मेडिकल एंड एजुकेशनल फाउंडेशन में आपका स्वागत है - जहां हर क्रिया, चाहे वो कितनी भी छोटी हो, एक उज्ज्वल कल की ओर एक कदम होती है।`}
        </p>
      </div>
    </div>
  );
};

export default page;
