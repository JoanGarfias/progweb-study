import { defineComponent as a, ref as g, openBlock as l, createElementBlock as r, withModifiers as k, createElementVNode as c, withDirectives as B, vModelText as C, normalizeClass as f, toDisplayString as h, Fragment as V, renderList as S, createBlock as I, mergeProps as L, toRef as D, computed as x, onMounted as M, createVNode as p, unref as _ } from "vue";
const E = ["onSubmit"], N = { class: "mx-auto mb-2 flex items-center gap-1 rounded-md border border-white bg-white p-2 shadow-md focus-within:border-slate-400" }, P = { class: "flex-grow" }, W = /* @__PURE__ */ c("button", {
  type: "submit",
  class: "rounded bg-purple-500 py-2 px-3 font-bold text-white transition-colors duration-300 hover:bg-purple-700"
}, " Add ", -1), T = /* @__PURE__ */ a({
  __name: "TodoActionBar",
  emits: ["create"],
  setup(e, { emit: n }) {
    const t = g(""), o = () => {
      n("create", t.value), t.value = "";
    };
    return (i, s) => (l(), r("form", {
      onSubmit: k(o, ["prevent"])
    }, [
      c("div", N, [
        c("div", P, [
          B(c("input", {
            "onUpdate:modelValue": s[0] || (s[0] = (m) => t.value = m),
            class: "w-full pl-3 focus:outline-none",
            type: "text",
            placeholder: "What task do you need to create?"
          }, null, 512), [
            [C, t.value]
          ])
        ]),
        W
      ])
    ], 40, E));
  }
}), z = { class: "m-1 ml-3 flex-shrink-0 align-middle" }, F = ["checked"], v = /* @__PURE__ */ a({
  __name: "TodoItem",
  props: {
    id: null,
    text: null,
    completed: { type: Boolean }
  },
  emits: ["toggle"],
  setup(e, { emit: n }) {
    const t = e, o = () => {
      n("toggle", t.id);
    };
    return (i, s) => (l(), r("label", {
      class: f(["flex cursor-pointer items-center rounded-md border border-white p-2 shadow-sm transition-colors duration-500 focus-within:border-slate-400 hover:border-slate-400", e.completed ? "bg-gray-100" : "bg-white"])
    }, [
      c("div", z, [
        c("input", {
          type: "checkbox",
          checked: e.completed,
          onChange: o,
          class: "outline-1 outline-purple-400"
        }, null, 40, F)
      ]),
      c("div", {
        class: f(["text-md ml-6 leading-tight", e.completed ? "text-gray-500" : "text-gray-900"])
      }, h(e.text), 3)
    ], 2));
  }
}), R = { class: "space-y-2" }, b = /* @__PURE__ */ a({
  __name: "TodoList",
  props: {
    items: null
  },
  emits: ["toggle"],
  setup(e, { emit: n }) {
    const t = (o) => {
      n("toggle", o);
    };
    return (o, i) => (l(), r("div", R, [
      (l(!0), r(V, null, S(e.items, (s) => (l(), I(v, L({
        key: s.id
      }, s, { onToggle: t }), null, 16))), 128))
    ]));
  }
}), U = { class: "mt-2 text-center" }, w = /* @__PURE__ */ a({
  __name: "TodoStatusBar",
  props: {
    completed: null,
    total: null
  },
  setup(e) {
    return (n, t) => (l(), r("p", U, h(e.completed) + " of " + h(e.total) + " completed.", 1));
  }
}), y = /* @__PURE__ */ a({
  __name: "TodoComponent",
  props: {
    todos: { default: () => [] }
  },
  setup(e) {
    const t = D(e, "todos"), o = g(0), i = x(
      () => t.value.filter((d) => d.completed).length
    ), s = x(() => t.value.length), m = (d) => {
      const u = t.value.find(($) => $.id === d);
      u && (u.completed = !u.completed);
    }, A = (d) => {
      d && (o.value += 1, t.value.push({
        id: t.value.length + 1,
        text: d,
        completed: !1
      }));
    };
    return M(() => {
      o.value = t.value.length;
    }), (d, u) => (l(), r("div", null, [
      p(w, {
        completed: _(i),
        total: _(s)
      }, null, 8, ["completed", "total"]),
      p(T, { onCreate: A }),
      p(b, {
        items: _(t),
        onToggle: m
      }, null, 8, ["items"])
    ]));
  }
}), j = {
  class: "container mx-auto mt-4",
  "data-todo-app": ""
}, q = /* @__PURE__ */ c("h1", { class: "p-2 text-center text-3xl font-bold" }, " Vue 3 Todo App with Vite and Typescript ", -1), G = /* @__PURE__ */ a({
  __name: "TodoApp",
  setup(e) {
    const n = g([
      {
        id: 1,
        text: "Create Vue 3 Todo App",
        completed: !0
      },
      {
        id: 2,
        text: "Create Apostrophe Webpack configuration module",
        completed: !0
      },
      {
        id: 3,
        text: "Implement the Vue 3 Todo App in Apostrophe",
        completed: !0
      },
      {
        id: 4,
        text: "Do the demo",
        completed: !1
      }
    ]);
    return (t, o) => (l(), r("div", j, [
      q,
      p(y, { todos: n.value }, null, 8, ["todos"])
    ]));
  }
}), J = {
  install(e) {
    e.component("TodoApp", G), e.component("TodoComponent", y), e.component("TodoStatusBar", w), e.component("TodoItem", v), e.component("TodoActionBar", T), e.component("TodoList", b);
  }
};
export {
  T as TodoActionBar,
  G as TodoApp,
  J as TodoAppPlugin,
  y as TodoComponent,
  v as TodoItem,
  b as TodoList,
  w as TodoStatusBar
};
