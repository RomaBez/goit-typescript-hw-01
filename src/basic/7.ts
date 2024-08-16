interface Datas {
  createAt: Date;
  updateAt: Date;
}

interface AccountInfo {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: Datas;
}

const page1: AccountInfo = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: AccountInfo = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
