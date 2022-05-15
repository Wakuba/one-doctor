import { createSlice } from '@reduxjs/toolkit'

interface ModalsType {
  isOpenVideoCarouselModal: boolean
  isOpenDepTopTextModal: boolean
  headerMenuState: { isOpenMenuModal: boolean; isMenuEventActive: boolean } // Headerのモーダルとクリックした時のイベントが機能するか
  isOpenUserInfoUpdatedModal: boolean
  isEmailAlreadyInUse: boolean
  isStudentAuthError: boolean
  isAccountNotExist: boolean //アカウントそのものが存在するか
  isNotEmailVerified: boolean //ユーザー自身がメールを承認したか
  isNotAuthorized: boolean //運営による認可を受けているか
}

const initialState: ModalsType = {
  isOpenVideoCarouselModal: false,
  isOpenDepTopTextModal: false,
  headerMenuState: { isOpenMenuModal: false, isMenuEventActive: false },
  isOpenUserInfoUpdatedModal: false,
  isEmailAlreadyInUse: false,
  isStudentAuthError: false,
  isAccountNotExist: false,
  isNotEmailVerified: false,
  isNotAuthorized: false,
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openVideoCarouselModal: (state) => {
      state.isOpenVideoCarouselModal = true
    },
    closeVideoCarouselModal: (state) => {
      state.isOpenVideoCarouselModal = false
    },

    openDepTopTextModal: (state) => {
      state.isOpenDepTopTextModal = true
    },
    closeDepTopTextModal: (state) => {
      state.isOpenDepTopTextModal = false
    },

    openHeaderMenu: (state) => {
      state.headerMenuState.isOpenMenuModal = true
      state.headerMenuState.isMenuEventActive = true
    },
    closeHeaderMenu: (state) => {
      state.headerMenuState.isOpenMenuModal = false
      state.headerMenuState.isMenuEventActive = false
    },

    openUIUModal: (state) => {
      state.isOpenUserInfoUpdatedModal = true
    },
    closeUIUModal: (state) => {
      state.isOpenUserInfoUpdatedModal = false
    },

    openEAUModal: (state) => {
      state.isEmailAlreadyInUse = true
    },
    closeEAUModal: (state) => {
      state.isEmailAlreadyInUse = false
    },

    openSAEModal: (state) => {
      state.isStudentAuthError = true
    },
    closeSAEModal: (state) => {
      state.isStudentAuthError = false
    },

    openANEModal: (state) => {
      state.isAccountNotExist = true
    },
    closeANEModal: (state) => {
      state.isAccountNotExist = false
    },

    openNEVModal: (state) => {
      state.isNotEmailVerified = true
    },
    closeNEVModal: (state) => {
      state.isNotEmailVerified = false
    },

    openNAModal: (state) => {
      state.isNotAuthorized = true
    },
    closeNAModal: (state) => {
      state.isNotAuthorized = false
    },

    closeAllModal: (state) => {
      state.isAccountNotExist = false
      state.isNotAuthorized = false
      state.isNotEmailVerified = false
      state.headerMenuState.isOpenMenuModal = false
      state.headerMenuState.isMenuEventActive = false
      state.isOpenDepTopTextModal = false
      state.isOpenVideoCarouselModal = false
      state.isOpenUserInfoUpdatedModal = false
      state.isStudentAuthError = false
      state.isEmailAlreadyInUse = false
    },
  },
})

export const {
  openVideoCarouselModal,
  closeVideoCarouselModal,
  openDepTopTextModal,
  closeDepTopTextModal,
  openHeaderMenu,
  closeHeaderMenu,
  openUIUModal,
  closeUIUModal,
  openEAUModal,
  closeEAUModal,
  openSAEModal,
  closeSAEModal,
  openANEModal,
  closeANEModal,
  openNAModal,
  closeNAModal,
  openNEVModal,
  closeNEVModal,
  closeAllModal,
} = modalsSlice.actions

// selectors
export const selectDepTopTextModal = (state): boolean =>
  state.modals.isOpenDepTopTextModal

export const selectSAEModal = (state): boolean =>
  state.modals.isStudentAuthError

export const selectEAUModal = (state): boolean =>
  state.modals.isEmailAlreadyInUse

export const selectANEModal = (state): boolean => state.modals.isAccountNotExist

export const selectNEVModal = (state): boolean =>
  state.modals.isNotEmailVerified

export const selectNAModal = (state): boolean => state.modals.isNotAuthorized

export const selectHeaderMenuState = (
  state
): { isOpenMenuModal: boolean; isMenuEventActive: boolean } =>
  state.modals.headerMenuState

export const selectUIUModal = (state): boolean =>
  state.modals.isOpenUserInfoUpdatedModal

//reducer
export default modalsSlice.reducer
