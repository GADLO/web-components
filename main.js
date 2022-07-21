const seed = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 16,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    submissionImage: '../public/images/submissions/image-yellow.png',
  },
  {
    id: 2,
    title: 'Blue Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 6,
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    submissionImage: '../public/images/submissions/image-yellow.png',
  },
  {
    id: 3,
    title: 'Green Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 8,
    avatar:
      'https://images.unsplash.com/photo-1617463570814-a368e94c9ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA1fHxhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    submissionImage: '../public/images/submissions/image-yellow.png',
  },
  {
    id: 4,
    title: 'White Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 12,
    avatar:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    submissionImage: '../public/images/submissions/image-yellow.png',
  },
];

const upvoteApp = {
  data() {
    return {
      submissions: seed,
    };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
    },
  },
};

Vue.createApp(upvoteApp).mount('#app');
