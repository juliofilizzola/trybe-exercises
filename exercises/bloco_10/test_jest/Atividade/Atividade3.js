const techlist = (obj, name) => {
  if (obj.length === 0 ) return 'Vazio!';

  const technologyList = obj
    .sort()
    .map((technology) => ({
    tech: technology,
    name,
    }));
  return technologyList; 
}



module.exports = techlist;