type OptionalAnimal = {
  name: string;
};

type OptionalFamily<Parent = OptionalAnimal, Child = OptionalAnimal> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const optionalFamily: OptionalFamily<OptionalAnimal, OptionalAnimal> = {
  mother: { name: 'mom' },
  father: { name: 'dad' },
  child: { name: 'baby' },
};

const optionalFamily2: OptionalFamily = {
  mother: { name: 'mom' },
  father: { name: 'dad' },
  child: { name: 'baby' },
};

