import dineout1 from '../assets/images/dineout1.png';
import dineout2 from '../assets/images/dineout2.png';
import levi1 from '../assets/images/levi1.png';
import levi2 from '../assets/images/levis.png';



export const projects = [
	{
		title: 'Levi’s Clone',
		description:
			"Levi’s.com is an e-commerce website that sells clothing of the Levi brand.",
           
	one:"Multi-functional filter",
	two:"Cart and payment sections",
    three:"Search and Debouncing feature",
	four:"Product display carousel",
	               

		technologiesUsed: [
			'Node',
			'Express',
			'MongoDB',
			'Mongoose',
			'JavaScript',
			'CSS',
		],

		image:[{link:levi1,index:1},{link:levi2,index:2}],

		websiteLink: 'https://leviwithbackend.herokuapp.com/',
		githubLink: 'https://github.com/vijendrasaini/LeviWithBackend',
	},

	{
		title: 'Dineout Clone',
		description:
			'An appointment-management app that allows users to add, edit, or delete their appointments. Doctors can store and manage patient information such as name, age, phone number, and appointment date.',
			one:"Sign-in/Sign-up",
			two:"Sort and filter",
			three:"Payment page integration",
			four:"Responsive website",
		technologiesUsed: ['JavaScript', 'HTML', 'CSS'],
		

		image:[{link:dineout1,index:1},{link:dineout2,index:2}],



		websiteLink: 'https://affectionate-swirles-dc9e0e.netlify.app/',
		githubLink: 'https://github.com/Uditkishore/CW-Project',
	}

	

	

	

	
];
