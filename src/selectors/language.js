import { createSelector } from "reselect";
import _ from "underscore";

// NOTE:
// Not sure what I was supposed to do here. The Readme says the final product
//   should match an image which doesn't include Mobile or Desktop as selectable
//   checkboxes, but there was no TODO in the code anywhere that would allow me
//   to easily hide it. So I just made this change here
export const getLanguages = state => {
  // Delete the first / of the following line to show mobile + desktop checkboxes
  //*
  if (Array.isArray(state.language.tags)) {
    return state.language.tags.filter(tag => tag.name != 'Mobile' && tag.name != 'Desktop')
  }
  //*/
  return state.language.tags
};

export const getSelectedLanguages = createSelector(
  [getLanguages],
  languages => {
    return _.filter(languages, tag => tag.displayed);
  }
);
