export const formatData = (data: string) => {
  const year = data.slice(0, 4);
  const month = data.slice(5, 7);
  const day = data.slice(8, 10);

  switch (month) {
    case '01': {
      return `${day} de janeiro de ${year}`;
    }

    case '02': {
      return `${day} de fevereiro de ${year}`;
    }

    case '03': {
      return `${day} de março de ${year}`;
    }

    case '04': {
      return `${day} de abril de ${year}`;
    }

    case '05': {
      return `${day} de maio de ${year}`;
    }

    case '06': {
      return `${day} de junho de ${year}`;
    }

    case '07': {
      return `${day} de julho de ${year}`;
    }

    case '08': {
      return `${day} de agosto de ${year}`;
    }

    case '09': {
      return `${day} de setembro de ${year}`;
    }

    case '10': {
      return `${day} de outubro de ${year}`;
    }

    case '11': {
      return `${day} de novembro de ${year}`;
    }

    case '12': {
      return `${day} de dezembro de ${year}`;
    }

    default:
      return `${day} de ${month} de ${year}`;
  }
};
