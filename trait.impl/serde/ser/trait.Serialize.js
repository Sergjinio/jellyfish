(function() {var implementors = {
"jf_plonk":[["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;"],["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;"]],
"jf_primitives":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.BLSOverBN254CurveSignatureScheme.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::BLSOverBN254CurveSignatureScheme\">BLSOverBN254CurveSignatureScheme</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSSignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSSignKey\">BLSSignKey</a>"],["impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/vid/advz/payload_prover/struct.LargeRangeProof.html\" title=\"struct jf_primitives::vid::advz::payload_prover::LargeRangeProof\">LargeRangeProof</a>&lt;F&gt;<div class=\"where\">where\n    F: CanonicalSerialize + CanonicalDeserialize,</div>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/vid/advz/payload_prover/struct.SmallRangeProof.html\" title=\"struct jf_primitives::vid::advz::payload_prover::SmallRangeProof\">SmallRangeProof</a>&lt;P&gt;<div class=\"where\">where\n    P: CanonicalSerialize + CanonicalDeserialize,</div>"],["impl&lt;E, H, I, Arity, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/append_only/struct.MerkleTree.html\" title=\"struct jf_primitives::merkle_tree::append_only::MerkleTree\">MerkleTree</a>&lt;E, H, I, Arity, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Element.html\" title=\"trait jf_primitives::merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_primitives::merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Index.html\" title=\"trait jf_primitives::merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    Arity: <a class=\"trait\" href=\"https://docs.rs/typenum/1.17.0/typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,\n    T: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.NodeValue.html\" title=\"trait jf_primitives::merkle_tree::NodeValue\">NodeValue</a>,</div>"],["impl&lt;H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/hasher/struct.HasherNode.html\" title=\"struct jf_primitives::merkle_tree::hasher::HasherNode\">HasherNode</a>&lt;H&gt;<div class=\"where\">where\n    H: Digest,</div>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/aead/struct.Ciphertext.html\" title=\"struct jf_primitives::aead::Ciphertext\">Ciphertext</a>"],["impl&lt;E, H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/vid/advz/struct.Common.html\" title=\"struct jf_primitives::vid::advz::Common\">Common</a>&lt;E, H&gt;<div class=\"where\">where\n    E: Pairing,\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/hasher/trait.HasherDigest.html\" title=\"trait jf_primitives::merkle_tree::hasher::HasherDigest\">HasherDigest</a>,</div>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.SignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::SignKey\">SignKey</a>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.Signature.html\" title=\"struct jf_primitives::signatures::schnorr::Signature\">Signature</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"],["impl&lt;E, H, I, Arity, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/light_weight/struct.LightWeightMerkleTree.html\" title=\"struct jf_primitives::merkle_tree::light_weight::LightWeightMerkleTree\">LightWeightMerkleTree</a>&lt;E, H, I, Arity, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Element.html\" title=\"trait jf_primitives::merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_primitives::merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Index.html\" title=\"trait jf_primitives::merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    Arity: <a class=\"trait\" href=\"https://docs.rs/typenum/1.17.0/typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,\n    T: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.NodeValue.html\" title=\"trait jf_primitives::merkle_tree::NodeValue\">NodeValue</a>,</div>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.KeyPair.html\" title=\"struct jf_primitives::signatures::schnorr::KeyPair\">KeyPair</a>&lt;P&gt;<div class=\"where\">where\n    P: Config,</div>"],["impl&lt;V: <a class=\"trait\" href=\"jf_primitives/vid/trait.VidScheme.html\" title=\"trait jf_primitives::vid::VidScheme\">VidScheme</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/vid/struct.VidDisperse.html\" title=\"struct jf_primitives::vid::VidDisperse\">VidDisperse</a>&lt;V&gt;<div class=\"where\">where\n    V::<a class=\"associatedtype\" href=\"jf_primitives/vid/trait.VidScheme.html#associatedtype.Share\" title=\"type jf_primitives::vid::VidScheme::Share\">Share</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,\n    V::<a class=\"associatedtype\" href=\"jf_primitives/vid/trait.VidScheme.html#associatedtype.Common\" title=\"type jf_primitives::vid::VidScheme::Common\">Common</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,\n    V::<a class=\"associatedtype\" href=\"jf_primitives/vid/trait.VidScheme.html#associatedtype.Commit\" title=\"type jf_primitives::vid::VidScheme::Commit\">Commit</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,</div>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.Signature.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::Signature\">Signature</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSSignature.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSSignature\">BLSSignature</a>"],["impl&lt;E, H, I, Arity, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/universal_merkle_tree/struct.UniversalMerkleTree.html\" title=\"struct jf_primitives::merkle_tree::universal_merkle_tree::UniversalMerkleTree\">UniversalMerkleTree</a>&lt;E, H, I, Arity, T&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Element.html\" title=\"trait jf_primitives::merkle_tree::Element\">Element</a> + CanonicalSerialize + CanonicalDeserialize,\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_primitives::merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, I, T&gt;,\n    I: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Index.html\" title=\"trait jf_primitives::merkle_tree::Index\">Index</a> + CanonicalSerialize + CanonicalDeserialize,\n    Arity: <a class=\"trait\" href=\"https://docs.rs/typenum/1.17.0/typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,\n    T: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.NodeValue.html\" title=\"trait jf_primitives::merkle_tree::NodeValue\">NodeValue</a>,</div>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSVerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSVerKey\">BLSVerKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.VerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::VerKey\">VerKey</a>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/aead/struct.KeyPair.html\" title=\"struct jf_primitives::aead::KeyPair\">KeyPair</a>"],["impl&lt;E, H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/vid/advz/struct.Share.html\" title=\"struct jf_primitives::vid::advz::Share\">Share</a>&lt;E, H&gt;<div class=\"where\">where\n    E: Pairing,\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/hasher/trait.HasherDigest.html\" title=\"trait jf_primitives::merkle_tree::hasher::HasherDigest\">HasherDigest</a>,\n    Output&lt;H&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,</div>"],["impl&lt;E, H, Arity, N, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/merkle_tree/namespaced_merkle_tree/struct.NMT.html\" title=\"struct jf_primitives::merkle_tree::namespaced_merkle_tree::NMT\">NMT</a>&lt;E, H, Arity, N, T&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.DigestAlgorithm.html\" title=\"trait jf_primitives::merkle_tree::DigestAlgorithm\">DigestAlgorithm</a>&lt;E, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, T&gt; + <a class=\"trait\" href=\"jf_primitives/merkle_tree/namespaced_merkle_tree/trait.BindNamespace.html\" title=\"trait jf_primitives::merkle_tree::namespaced_merkle_tree::BindNamespace\">BindNamespace</a>&lt;E, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>, T, N&gt;,\n    E: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.Element.html\" title=\"trait jf_primitives::merkle_tree::Element\">Element</a> + <a class=\"trait\" href=\"jf_primitives/merkle_tree/namespaced_merkle_tree/trait.Namespaced.html\" title=\"trait jf_primitives::merkle_tree::namespaced_merkle_tree::Namespaced\">Namespaced</a>&lt;Namespace = N&gt; + CanonicalSerialize + CanonicalDeserialize,\n    T: <a class=\"trait\" href=\"jf_primitives/merkle_tree/trait.NodeValue.html\" title=\"trait jf_primitives::merkle_tree::NodeValue\">NodeValue</a> + CanonicalSerialize + CanonicalDeserialize,\n    N: <a class=\"trait\" href=\"jf_primitives/merkle_tree/namespaced_merkle_tree/trait.Namespace.html\" title=\"trait jf_primitives::merkle_tree::namespaced_merkle_tree::Namespace\">Namespace</a>,\n    Arity: <a class=\"trait\" href=\"https://docs.rs/typenum/1.17.0/typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>,</div>"],["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/aead/struct.EncKey.html\" title=\"struct jf_primitives::aead::EncKey\">EncKey</a>"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.SignKey.html\" title=\"struct jf_primitives::signatures::schnorr::SignKey\">SignKey</a>&lt;F&gt;"]],
"jf_utils":[["impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.196/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jf_utils/struct.CanonicalBytes.html\" title=\"struct jf_utils::CanonicalBytes\">CanonicalBytes</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()