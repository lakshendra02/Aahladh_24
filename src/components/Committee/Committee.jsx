import React from "react";
import "./Committee.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import MukeshImage from '../../Assets/Committee/MukeshKumar.jpg'
import DheerajImage from '../../Assets/Committee/DHEERAZ.jpg'
import NikhilImage from '../../Assets/Committee/NIKHILUPADHYAY.jpg'
import UtkarshImage from '../../Assets/Committee/UTKARSHVERMA.jpg'
import YuvarajuImage from '../../Assets/Committee/RYuvaraju.jpg'
import GouthamImage from '../../Assets/Committee/SGoutham.png'
import karthikeyanImage from '../../Assets/Committee/KARTHIKEYAN2.png'
import HarshitImage from '../../Assets/Committee/HARSHITKUMAR.jpg'
import BhupeshImage from '../../Assets/Committee/BHUPESH.png'
import ManojImage from '../../Assets/Committee/MANOJ.jpg'
import KamalImage from '../../Assets/Committee/KamalRaj.jpg'
import VigneshImage from '../../Assets/Committee/VIGNESH.jpg'
import KarthikeyaImage from '../../Assets/Committee/KARTHIKEYA.jpg'
import VamshiImage from '../../Assets/Committee/VAMSHI.jpeg'
import HayagreevImage from '../../Assets/Committee/Hayagreev.png'
import VishnuImage from '../../Assets/Committee/Vishnu.png'
import BasheerImage from '../../Assets/Committee/SHAIKBASHEER.jpg'
import KartheekImage from '../../Assets/Committee/KARTHEEKCHERUKURI.png'
import SaranyaImage from '../../Assets/Committee/SARANYA.jpg'
import DeepthiImage from '../../Assets/Committee/MIRYALADEEPTHI.jpg'
import JayashreeImage from '../../Assets/Committee/JAYASHREE.jpg'
import PhanindraImage from '../../Assets/Committee/PHANINDRA.jpg'
import TagoreImage from '../../Assets/Committee/TAGORE.png'
import ManishaImage from '../../Assets/Committee/MANISHADAS.jpg'
import PradeepImage from '../../Assets/Committee/PRADEEP.jpg'
import SnigdhaImage from '../../Assets/Committee/snigdha.jpg'
import GnyanSaiImage from '../../Assets/Committee/GNYANSAI.jpeg'
import RaahathImage from '../../Assets/Committee/SHAIKRAAHATH.jpeg'
import PavaniImage from '../../Assets/Committee/pavani.jpg'
import PriyaImage from '../../Assets/Committee/shanmukha.jpg'

const Card = ({
  category,
  title,
  backgroundImage,
  socialMediaIcons,
  phoneNumber,
  email,
}) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="committee-card" style={cardStyle}>
      <div className="card__img"></div>
      <a href="/" className="card_link">
        <div className="card__img--hover"></div>
      </a>
      <div className="card__info">
        <span className="card__category">{category}</span>
        <h3 className="card__title">{title}</h3>
        <div className="organizers-social-icons">
          <a href={`tel:${phoneNumber}`} className="contact-icon-phone">
            <FaPhone size={16} />
          </a>
          <a href={`mailto:${email}`} className="contact-icon">
            <FaEnvelope size={20} />
          </a>
          {socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Committee = () => {
  const purchaseCommittee = [
    {
      category: "Purchase Committee",
      title: "R Yuvaraju",
      backgroundImage: YuvarajuImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/yuvi_8156/",
        },
      ],
      email: "201236@iiitt.ac.in",
      phoneNumber: "9515816165",
    },
    {
      category: "Purchase Committee",
      title: "Shameerpet Goutham",
      backgroundImage: GouthamImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/_goutham19_/",
        },
      ],
      email: "201134@iiitt.ac.in",
      phoneNumber: "8618091957",
    },
    {
      category: "Purchase Committee",
      title: "Karthikeyan P L",
      backgroundImage: karthikeyanImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/karthikeyan_7_7/",
        },
      ],
      email: "211215@iiitt.ac.in",
      phoneNumber: "9597063722",
    },
    {
      category: "Purchase Committee",
      title: "Harshit Kumar Gupta",
      backgroundImage: HarshitImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/harshit_hj007/",
        },
      ],
      email: "211211@iiitt.ac.in",
      phoneNumber: "8601176818",
    },
    {
      category: "Purchase Committee",
      title: "Bhupesh Gupta",
      backgroundImage: BhupeshImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/bhupesh_7_/",
        },
      ],
      email: "211209@iiitt.ac.in",
      phoneNumber: "9785400480",
    },
  ];

  const stallCommittee = [
    {
      category: "Stall Committee",
      title: "Manoj Kumar",
      backgroundImage: ManojImage,
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "https://www.linkedin.com/in/manoj-kumar-karumanchi/",
        },
      ],
      email: "201123@iiitt.ac.in",
      phoneNumber: "7815844021",
    },
    {
      category: "Stall Committee",
      title: "Shameerpet Goutham",
      backgroundImage: GouthamImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/_goutham19_/",
        },
      ],
      email: "201134@iiitt.ac.in",
      phoneNumber: "8618091957",
    },
    {
      category: "Stall Committee",
      title: "Harshit Kumar Gupta",
      backgroundImage: HarshitImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/harshit_hj007/",
        },
      ],
      email: "211211@iiitt.ac.in",
      phoneNumber: "8601176818",
    },
    {
      category: "Stall Committee",
      title: "Bhupesh Gupta",
      backgroundImage: BhupeshImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/bhupesh_7_/",
        },
      ],
      email: "211209@iiitt.ac.in",
      phoneNumber: "9785400480",
    },
    {
      category: "Stall Committee",
      title: "Manisha Das",
      backgroundImage: ManishaImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/meta.madmaxx_1.1/",
        },
      ],
      email: "221232@iiitt.ac.in",
      phoneNumber: "6297122260",
    },
  ];

  const receptionCommittee = [
    {
      category: "Reception Committee",
      title: "K Mukesh Kumar",
      backgroundImage: MukeshImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/mukesh_kolisetti/",
        },
      ],
      email: "201119@iiitt.ac.in",
      phoneNumber: "6305477370",
    },
    {
      category: "Reception Committee",
      title: "K Dheeraz",
      backgroundImage: DheerajImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/kaluridheeraz9",
        },
      ],
      email: "211214@iiitt.ac.in",
      phoneNumber: "8186932132",
    },
    {
      category: "Reception Committee",
      title: "Nikhil Upadhyay",
      backgroundImage: NikhilImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/nikhil_cobalt/",
        },
      ],
      email: "221237@iiitt.ac.in",
      phoneNumber: "7880308488",
    },
    {
      category: "Reception Committee",
      title: "Utkarsh Verma",
      backgroundImage: UtkarshImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/utkarshverma439/",
        },
      ],
      email: "221251@iiitt.ac.in",
      phoneNumber: "7081745339",
    },
  ];

  const securityCommittee = [
    {
      category: "Stall Committee",
      title: "N Kamal Raj",
      backgroundImage: KamalImage,
      socialMediaIcons: [
        {
          icon: <FaLinkedinIn size={20} />,
          link: "https://www.linkedin.com/in/n-kamal-raj-25082k",
        },
      ],
      email: "201214@iiitt.ac.in",
      phoneNumber: "7550250893",
    },
    {
      category: "Stall Committee",
      title: "VVS Vignesh",
      backgroundImage: VigneshImage,
      socialMediaIcons: [
        {
          icon: <FaLinkedinIn size={20} />,
          link: "linkedin.com/in/vs-vignesh-vemula-a3b833242",
        },
      ],
      email: "211234@iiitt.ac.in",
      phoneNumber: "9346535169",
    },
    {
      category: "Stall Committee",
      title: "Karthikeya Saradhi",
      backgroundImage: KarthikeyaImage,
      socialMediaIcons: [
        {
          // icon: <FaLinkedinIn size={20} />,
          // link: "linkedin-profile-link-2",
        },
      ],
      email: "221224@iiitt.ac.in",
      phoneNumber: "8790412576",
    },
    {
      category: "Stall Committee",
      title: "Gogulothu Vamshi",
      backgroundImage: VamshiImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/_vamshiiiiiiii_/",
        },
      ],
      email: "221219@iiitt.ac.in",
      phoneNumber: "9959565372",
    },
  ];

  const decorationCommittee = [
    {
      category: "Decoration Committee",
      title: "Hari Rama Hayagreev",
      backgroundImage: HayagreevImage,
      socialMediaIcons: [
        {
          icon: <FaLinkedinIn size={20} />,
          link: "https://www.linkedin.com/in/hari-ramahayagreev-565a72200/",
        },
      ],
      email: "201111@iiitt.ac.in",
      phoneNumber: "9666661616",
    },
    {
      category: "Decoration Committee",
      title: "Vishnu Vardhan",
      backgroundImage: VishnuImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/_iam_.vishnu_/",
        },
      ],
      email: "201106@iiitt.ac.in",
      phoneNumber: "7981988676",
    },
    {
      category: "Decoration Committee",
      title: "Shaik Basheer Ahmed",
      backgroundImage: BasheerImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/basheerahmed_shaik/",
        },
      ],
      email: "211232@iiitt.ac.in",
      phoneNumber: "7893549328",
    },
    {
      category: "Decoration Committee",
      title: "Cherukuri V L N Kartheek",
      backgroundImage: KartheekImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/kartheek.cherukuri/",
        },
      ],
      email: "221212@iiitt.ac.in",
      phoneNumber: "7893450614",
    },
    {
      category: "Stall Committee",
      title: "Karthikeya Saradhi",
      backgroundImage: KarthikeyaImage,
      socialMediaIcons: [
        {
          // icon: <FaLinkedinIn size={20} />,
          // link: "linkedin-profile-link-2",
        },
      ],
      email: "221224@iiitt.ac.in",
      phoneNumber: "8790412576",
    },
    {
      category: "Stall Committee",
      title: "Gogulothu Vamshi",
      backgroundImage: VamshiImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/_vamshiiiiiiii_/",
        },
      ],
      email: "221219@iiitt.ac.in",
      phoneNumber: "9959565372",
    },
    {
      category: "Decoration Committee",
      title: "K.Gopika Saranya",
      backgroundImage: SaranyaImage,
      socialMediaIcons: [
        {
          icon: <FaLinkedinIn size={20} />,
          link: "https://in.linkedin.com/in/kotakala-gopikasaranya-480364289",
        },
      ],
      email: "221114@iiitt.ac.in",
      phoneNumber: "9059021804",
    },
    {
      category: "Decoration Committee",
      title: "Deepthi Miryala",
      backgroundImage: DeepthiImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/deeeeepzzzzz/",
        },
      ],
      email: "221134@iiitt.ac.in",
      phoneNumber: "8555933518",
    },
    {
      category: "Decoration Committee",
      title: "Jayashree Jayaprakash",
      backgroundImage: JayashreeImage,
      socialMediaIcons: [
        {
          icon: <FaLinkedinIn size={20} />,
          link: "https://www.linkedin.com/in/jayashree-kaveripakam-jayaprakash-b067b7279",
        },
      ],
      email: "221226@iiitt.ac.in",
      phoneNumber: "8688717048",
    },
    {
      category: "Decoration Committee",
      title: "K.Phanindra",
      backgroundImage: PhanindraImage,
      socialMediaIcons: [
        {
          // icon: <FaLinkedinIn size={20} />,
          // link: "linkedin-profile-link-2",
        },
      ],
      email: "221223@iiitt.ac.in",
      phoneNumber: "8639864118",
    },
    {
      category: "Decoration Committee",
      title: "Guguloth Tagore",
      backgroundImage: TagoreImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/tagoreguguloth/",
        },
      ],
      email: "221218@iiitt.ac.in",
      phoneNumber: "9381437406",
    },
  ];
  const designCommittee = [
    {
      category: "Design Committee",
      title: "Vidiyala Pradeep",
      backgroundImage: PradeepImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/mr.pradeepvidiyala/",
        },
      ],
      email: "211136@iiitt.ac.in",
      phoneNumber: "7075749912",
    },
    {
      category: "Design Committee",
      title: "K Sri Sai Snigdha",
      backgroundImage: SnigdhaImage,
      socialMediaIcons: [
        {
          
        },
      ],
      email: "211114@iiitt.ac.in",
      phoneNumber: "8555971940",
    },
    {
      category: "Design Committee",
      title: "Gnyan Sai Asapanna",
      backgroundImage: GnyanSaiImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/iam_gnyansai/",
        },
      ],
      email: "221209@iiitt.ac.in",
      phoneNumber: "8919537210",
    },
    {
      category: "Decoration Committee",
      title: "Cherukuri V L N Kartheek",
      backgroundImage: KartheekImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/kartheek.cherukuri/",
        },
      ],
      email: "221212@iiitt.ac.in",
      phoneNumber: "7893450614",
    },
    {
      category: "Design Committee",
      title: "Shaik Raahath",
      backgroundImage: RaahathImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/raahath_shaik/",
        },
      ],
      email: "221245@iiitt.ac.in",
      phoneNumber: "9059243744",
    },
    {
      category: "Design Committee",
      title: "K.Gopika Saranya",
      backgroundImage: SaranyaImage,
      socialMediaIcons: [
        {
          icon: <FaLinkedinIn size={20} />,
          link: "https://in.linkedin.com/in/kotakala-gopikasaranya-480364289",
        },
      ],
      email: "221124@iiitt.ac.in",
      phoneNumber: "9059021804",
    },
    {
      category: "Design Committee",
      title: "Kuruva Pavani",
      backgroundImage: PavaniImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/pavani._21/",
        },
      ],
      email: "221228@iiitt.ac.in",
      phoneNumber: "9703927236",
    },{
      category: "Design Committee",
      title: "D.Shanmukha Priya",
      backgroundImage: PriyaImage,
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/Chris_evans2313/",
        },
      ],
      email: "221214@iiitt.ac.in",
      phoneNumber: "9494741989",
    },
  ];

  return (
    <div className="committe-container">
      <div className="committe-types">
        <h2 className="committe-heading">Reception Committee</h2>
        <div className="committee-css">
          <section className="committee-cards">
            {receptionCommittee.map((member, index) => (
              <Card
                key={index}
                category={member.category}
                title={member.title}
                backgroundImage={member.backgroundImage}
                socialMediaIcons={member.socialMediaIcons}
                email={member.email}
                phoneNumber={member.phoneNumber}
              />
            ))}
          </section>
        </div>
      </div>
      <div className="committe-types">
        <h2 className="committe-heading">Purchase Committee</h2>
        <div className="committee-css">
          <section className="committee-cards">
            {purchaseCommittee.map((member, index) => (
              <Card
                key={index}
                category={member.category}
                title={member.title}
                backgroundImage={member.backgroundImage}
                socialMediaIcons={member.socialMediaIcons}
                email={member.email}
                phoneNumber={member.phoneNumber}
              />
            ))}
          </section>
        </div>
      </div>
      <div className="committe-types">
        <h2 className="committe-heading">Stall Committee</h2>
        <div className="committee-css">
          <section className="committee-cards">
            {stallCommittee.map((member, index) => (
              <Card
                key={index}
                category={member.category}
                title={member.title}
                backgroundImage={member.backgroundImage}
                socialMediaIcons={member.socialMediaIcons}
                email={member.email}
                phoneNumber={member.phoneNumber}
              />
            ))}
          </section>
        </div>
      </div>
      
      <div className="committe-types">
        <h2 className="committe-heading">Security Committee</h2>
        <div className="committee-css">
          <section className="committee-cards">
            {securityCommittee.map((member, index) => (
              <Card
                key={index}
                category={member.category}
                title={member.title}
                backgroundImage={member.backgroundImage}
                socialMediaIcons={member.socialMediaIcons}
                email={member.email}
                phoneNumber={member.phoneNumber}
              />
            ))}
          </section>
        </div>
      </div>
      <div className="committe-types">
        <h2 className="committe-heading">Decoration Committee</h2>
        <div className="committee-css">
          <section className="committee-cards">
            {decorationCommittee.map((member, index) => (
              <Card
                key={index}
                category={member.category}
                title={member.title}
                backgroundImage={member.backgroundImage}
                socialMediaIcons={member.socialMediaIcons}
                email={member.email}
                phoneNumber={member.phoneNumber}
              />
            ))}
          </section>
        </div>
      </div>
      <div className="committe-types">
        <h2 className="committe-heading">Design Committee</h2>
        <div className="committee-css">
          <section className="committee-cards">
            {designCommittee.map((member, index) => (
              <Card
                key={index}
                category={member.category}
                title={member.title}
                backgroundImage={member.backgroundImage}
                socialMediaIcons={member.socialMediaIcons}
                email={member.email}
                phoneNumber={member.phoneNumber}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Committee;
