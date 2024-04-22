export const mflCode = async (searchQuery) => {
  try {
    const auth = 'To4WWZTKvq5w9UIS4t3JSTbTwgAZaj';
    let mfl_url = 'https://api.kmhfl.health.go.ke/api/facilities/material/?fields=id,code,name';

    if (searchQuery) {
      mfl_url += `&search=${encodeURIComponent(searchQuery)}`;
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    };
    const response = await openmrsFetch(mfl_url, { method: 'GET', headers });
    const facilities = await response.data.results;
    console.log('[its-kios09]: List of Facilities', facilities);

    const extractedData = facilities.map(({ code, name }) => ({ code, name }));

    console.log('[its-kios09]: Kenya Master Health Facility List', extractedData);
    return extractedData;
  } catch (error) {
    console.error(error);
  }
};
